import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import {
  SearchSection,
  SearchResults,
  WeirdnessSlider,
  LikeButton,
  LikedGifs
} from 'app/components'
import { Giphy } from 'app/api/giphy'

@withRouter
export default class Home extends Component {
  state = { searchTerm: null, weirdness: null }

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

    if (!searchTerm || images?.[searchTerm]) return null
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      history.push(`/${searchTerm}`)
      Giphy.translateGif(searchTerm, weirdness)
    }, 500)
  }

  render () {
    const { match } = this.props
    const { searchTerm, weirdness } = match?.params

    return (
      <S.HomePage>
        <S.SearchComponents>
          <SearchSection initialValues={{ searchTerm, weirdness }} onChange={this.handleGifySearch} />
          <S.SearchActions>
            <WeirdnessSlider />
            <LikeButton />
          </S.SearchActions>
          <SearchResults />
        </S.SearchComponents>
        <LikedGifs />
      </S.HomePage>
    )
  }
}
