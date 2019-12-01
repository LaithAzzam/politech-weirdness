import React, { Component } from 'react'
import { withFormState } from 'informed'
import { connect } from 'react-redux'

import * as S from './styles'
import { Loading } from 'app/ui-kit'
import { weirdnessField } from 'app/data'
import { Giphy } from 'app/api/giphy'
import withInformed from '../withInformed/withInformed'

const mapStateToProps = (state) => {
  const { images } = state.giphy
  return { images }
}

@withInformed
@withFormState
@connect(mapStateToProps)
export default class SearchSection extends Component {
  state = { loading: false }

  handleSearchTerm = (event) => {
    const { images } = this.props
    const searchTerm = event.target.value

    if (!searchTerm || images?.[searchTerm]) return null
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      Giphy.translateGif(searchTerm)
    }, 500)
  }

  render () {
    const { formState, images } = this.props
    const { searchTerm } = formState?.values

    const loadingSearchTerm = searchTerm && !images?.[searchTerm]

    return (
      <S.SearchSectionComponent>
        <p>Find out how weird you are by selecting the GIFs that make you laugh. We'll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
        <p>When you find a GIF you like, press the Like button. Once you like 5 GIFs, we'll show you how weird you are.</p>
        {loadingSearchTerm && <Loading />}
        <S.StyledSearch {...weirdnessField.searchTerm} onChange={this.handleSearchTerm} />
      </S.SearchSectionComponent>
    )
  }
}
