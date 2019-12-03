import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import { setLikedImages } from 'app/store/app/actions'
import { Button } from 'app/ui-kit'

const mapStateToProps = (state) => {
  const { likedImages } = state.app
  return { likedImages }
}

@withRouter
@connect(mapStateToProps, { setLikedImages })
export default class ResultsModal extends Component {
  handleReset = () => {
    this.props.closeModal()
    this.props.setLikedImages({})
    this.props.history.push('/')
  }

  render () {
    const { likedImages } = this.props
    let score = 0
    if (likedImages) {
      Object.values(likedImages).forEach(image => {
        console.log('image: ', image)
        score = score + parseInt(image.weirdness || 0)
        console.log('score: ', score)
      })
    }
    const average = score / likedImages.length

    return (
      <S.ResultsModalComponent>
        <S.Title>Your results</S.Title>
        <S.Description>
          <p>Woa!!! You're pretty weird!</p>
          <S.Average><strong>Weirdness:</strong> {average || 0} / 10</S.Average>
        </S.Description>
        <Button onClick={this.handleReset}>Reset</Button>
      </S.ResultsModalComponent>
    )
  }
}
