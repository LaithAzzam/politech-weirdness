import React, { Component } from 'react'

import * as S from './styles'

export default class SearchResultImage extends Component {
  render () {
    const { loading } = this.props

    return (
      <S.SearchResultImageComponent loading={loading}>
        {loading && <S.StyledLoading />}
      </S.SearchResultImageComponent>
    )
  }
}
