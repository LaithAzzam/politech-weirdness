import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as S from './styles'
import { SearchResultImage } from 'app/components'

const mapStateToProps = (state) => {
  const { likedImages } = state.app
  return { likedImages }
}

@withRouter
@connect(mapStateToProps)
export default class LikedGifs extends Component {
  LikedImages = () => {
    const { likedImages } = this.props
    return (
      <div>
        {likedImages.map((image, index) => <SearchResultImage imageUrl={image.imageUrl} key={index} />)}
      </div>
    )
  }

  GetStarted = () => {
    return (
      <S.WarningMessage>
        <h4>You haven't liked any gifs yet.</h4>
        <p>Search for an image to get started</p>
        <SearchResultImage />
      </S.WarningMessage>
    )
  }

  render () {
    const { likedImages } = this.props

    return (
      <S.LikedGifsComponent>
        {likedImages
          ? <this.LikedImages />
          : <this.GetStarted />}
      </S.LikedGifsComponent>
    )
  }
}
