import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as S from './styles'
import { Button } from 'app/ui-kit'
import { openModal } from 'app/store/app/actions'

const mapStateToProps = (state) => {
  const { likedImages } = state.app
  return { likedImages }
}

@withRouter
@connect(mapStateToProps, { openModal })
export default class LikedGifs extends Component {
  LikedImages = () => {
    const { likedImages, openModal } = this.props
    const remaining = 5 - likedImages.length
    const isFilled = remaining <= 0
    const title = isFilled ? 'You\'re all set!' : 'Keep it goin!'
    const subTitle = isFilled ? 'Click Caculate to receive your score.' : `Like ${remaining} more images to get a weirdness score.`
    return (
      <>
        <h4>{title}</h4>
        <p>{subTitle}</p>
        <Button disabled={remaining >= 1} onClick={() => { openModal({ name: 'ResultsModal' }) }}>Calculate</Button>
        {likedImages.map((image, index) => <S.StyledSearchResultImage imageUrl={image.imageUrl} key={index} />)}
      </>
    )
  }

  GetStarted = () => {
    return (
      <>
        <h4>You haven't liked any gifs yet.</h4>
        <p>Search for an image to get started</p>
        <S.StyledSearchResultImage />
      </>
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
