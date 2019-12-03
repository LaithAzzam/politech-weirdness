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
    // eslint-disable-next-line camelcase
    const imageUrl = results?.data?.images?.fixed_width?.url

    const newLikedImages = Object.assign([], likedImages) || []

    const image = {
      searchTerm,
      imageUrl,
      weirdness
    }

    newLikedImages.push(image)

    setLikedImages(newLikedImages)
  }

  render () {
    const { likedImages } = this.props
    const likeDisabled = likedImages?.length >= 5

    return (
      <S.LikeButtonComponent>
        <Button onClick={this.handleLike} disabled={likeDisabled}>Like</Button>
      </S.LikeButtonComponent>
    )
  }
}
