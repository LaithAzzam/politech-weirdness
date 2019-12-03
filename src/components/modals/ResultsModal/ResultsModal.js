import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import { Button } from 'app/ui-kit'

const mapStateToProps = (state) => {
  const { likedImages } = state.app
  return { likedImages }
}

@connect(mapStateToProps)
export default class ResultsModal extends Component {
  render () {
    const { likedImages } = this.props
    let score = 0
    likedImages.forEach(image => {
      score = score + parseInt(image.weirdness)
    })
    const average = score / likedImages.length

    return (
      <S.ResultsModalComponent>
        <S.Title>Your results</S.Title>
        <S.Description>
          <p>Woa!!! You're pretty weird!</p>
          <S.Average><strong>Weirdness:</strong> {average || 0}</S.Average>
        </S.Description>
        <Button>Reset</Button>
      </S.ResultsModalComponent>
    )
  }
}
