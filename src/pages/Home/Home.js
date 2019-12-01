import React, { Component } from 'react'

import * as S from './styles'
import { SearchSection, SearchResults, LikedGifs } from 'app/components'

export default class Home extends Component {
  render () {
    return (
      <S.HomePage>
        <S.SearchComponents>
          <SearchSection />
          <SearchResults />
        </S.SearchComponents>
        <LikedGifs />
      </S.HomePage>
    )
  }
}
