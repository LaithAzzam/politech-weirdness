import React, { Component } from 'react'

import * as S from './styles'
import { SearchResultImage } from 'app/components'

export default class LikedGifs extends Component {
  LikedImages = () => {
    return (
      <div>
        <SearchResultImage loading />
      </div>
    )
  }

  render () {
    const { likedImages } = this.props

    if (!likedImages) return null

    return (
      <S.LikedGifsComponent>
        <this.LikedImages />
      </S.LikedGifsComponent>
    )
  }
}
