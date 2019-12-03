import React, { Component } from 'react'
import { withFormState, withFormApi } from 'informed'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import { weirdnessField } from 'app/data'
import { Giphy } from 'app/api/giphy'
import withInformed from '../withInformed/withInformed'

const mapStateToProps = (state) => {
  const { images } = state.giphy
  return { images }
}

@withInformed
@withFormState
@withFormApi
@withRouter
@connect(mapStateToProps)
export default class SearchSection extends Component {
  componentDidMount = () => {
    const { match, formApi } = this.props
    const searchTerm = match?.params?.searchTerm
    const weirdness = match?.params?.weirdness

    formApi.setValues({ searchTerm, weirdness })
  }

  handleSearchTerm = (event) => {
    const { images, history } = this.props
    const searchTerm = event.target.value

    if (!searchTerm || images?.[searchTerm]) return null
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      history.push(`/${searchTerm}`)
      Giphy.translateGif(searchTerm)
    }, 500)
  }

  SearchSteps = () => {
    const searchSteps = [
      'We\'ll show you the least weird ones to start.',
      'you can move the slider to make them weirder.',
      'When you find a GIF you like, press the Like button.',
      'Once you like 5 GIFs, we\'ll show you how weird you are.'
    ]

    return (
      <S.SearchSteps>
        {searchSteps.map((step, index) => (
          <S.SearchStep key={index}>{step}</S.SearchStep>
        ))}
      </S.SearchSteps>
    )
  }

  render () {
    return (
      <S.SearchSectionComponent>
        <S.SearchTitle>Find out how weird you are by selecting the GIFs that make you laugh.</S.SearchTitle>
        <this.SearchSteps />
        <S.StyledSearch {...weirdnessField.searchTerm} onChange={this.handleSearchTerm} disableError />
      </S.SearchSectionComponent>
    )
  }
}
