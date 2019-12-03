import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import { setLikedImages } from 'app/store/app/actions'
import { Button } from 'app/ui-kit'

const mapStateToProps = (state) => {
  const { likedImages } = state.app
  const { images } = state.giphy
  return { images, likedImages }
}

@withRouter
@connect(mapStateToProps, { setLikedImages })
export default class LikeButton extends Component {
  handleLike = () => {
    const { match, images, setLikedImages, likedImages } = this.props
    const { searchTerm, weirdness } = match?.params
    const results = images?.[searchTerm]
    console.log('results: ', results)
    // eslint-disable-next-line camelcase
    const imageUrl = results?.data?.images?.fixed_width?.url

    const newLikedImages = Object.assign([], likedImages) || []

    const image = {
      searchTerm,
      imageUrl,
      weirdness
    }

    newLikedImages.push(image)
    console.log('newLikedImages: ', newLikedImages)

    setLikedImages(newLikedImages)
  }

  render () {
    return (
      <S.LikeButtonComponent>
        <Button onClick={this.handleLike}>Like</Button>
      </S.LikeButtonComponent>
    )
  }
}