import React, { Component } from 'react'

import * as S from './styles'

export default class SearchResultImage extends Component {
  render () {
    const { imageUrl } = this.props

    return (
      <S.SearchResultImageComponent {...this.props}>
        {!imageUrl && <S.StyledImageIcon />}
        <img src={imageUrl} />
      </S.SearchResultImageComponent>
    )
  }
}
