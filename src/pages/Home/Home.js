import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as S from './styles'
import {
  SearchSection,
  SearchResults,
  WeirdnessSlider,
  LikeButton,
  LikedGifs
} from 'app/components'
import { Giphy } from 'app/api/giphy'

const mapStateToProps = (state) => {
  const { images } = state.giphy
  return { images }
}

@withRouter
@connect(mapStateToProps)
export default class Home extends Component {
  state = { searchTerm: '', weirdness: 0 }

  componentDidMount = () => {
    this.setInitialValues()
  }

  setInitialValues = () => {
    const { match } = this.props
    const { searchTerm, weirdness } = match?.params

    this.setState({
      searchTerm,
      weirdness
    })
    if (searchTerm) this.handleGifySearch(searchTerm)
  }

  handleGifySearch = (searchTerm) => {
    const { images, history, match } = this.props
    const weirdness = match?.params?.weirdness

    if (!searchTerm || images?.[searchTerm]) {
      this.setState({ searchTerm: null, weirdness: null })
      history.push('/')
    }

    if (this.timeout) clearTimeout(this.timeout)
    if (searchTerm !== match.params.searchTerm) history.push(`/${searchTerm}`)
    this.timeout = setTimeout(() => {
      Giphy.translateGif(searchTerm, weirdness)
    }, 500)
  }

  handleWeirdnessChange = (weirdness) => {
    const { images, history, match } = this.props
    const searchTerm = match?.params?.searchTerm
    history.push(`/${searchTerm}/${weirdness}`)

    if (images?.[searchTerm]?.[weirdness]) return
    if (this.timeout) clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      Giphy.translateGif(searchTerm, weirdness)
    }, 500)
  }

  render () {
    const { match, images } = this.props
    const { searchTerm, weirdness } = match?.params
    const image = images?.[searchTerm]

    return (
      <S.HomePage>
        <S.SearchComponents>
          <SearchSection initialValues={{ searchTerm, weirdness }} onChange={this.handleGifySearch} />
          {image &&
            <S.SearchActions>
              <WeirdnessSlider onChange={this.handleWeirdnessChange} />
              <LikeButton />
            </S.SearchActions>}
          <SearchResults loading={!image?.[weirdness] && searchTerm} />
        </S.SearchComponents>
        <LikedGifs />
      </S.HomePage>
    )
  }
}
