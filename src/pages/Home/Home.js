import React, { Component } from 'react'

import * as S from './styles'
import {
  SearchSection,
  SearchResults,
  WeirdnessSlider,
  LikeButton,
  LikedGifs
} from 'app/components'

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
  }

  render () {
    const { searchTerm, weirdness } = this.state
    console.log('searchTerm: ', searchTerm)
    console.log('weirdness: ', weirdness)
    return (
      <S.HomePage>
        <S.SearchComponents>
          <SearchSection initialValues={{ searchTerm, weirdness }} />
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
