import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as S from './styles'
import { SearchResultImage } from 'app/components'

const mapStateToProps = (state) => {
  const { images } = state.giphy
  return { images }
}

@withRouter
@connect(mapStateToProps)
export default class SearchResults extends Component {
  render () {
    const { match, images } = this.props
    const { searchTerm } = match?.params

    const results = images?.[searchTerm]
    // eslint-disable-next-line camelcase
    const gifUrl = results?.data?.images?.fixed_width?.url

    return (
      <S.SearchResultsComponent>
        {gifUrl && <SearchResultImage imageUrl={gifUrl} />}
      </S.SearchResultsComponent>
    )
  }
}
