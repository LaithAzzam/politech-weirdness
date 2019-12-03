import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import { Slider } from 'app/ui-kit'
import { Giphy } from 'app/api/giphy'

@withRouter
export default class WeirdnessSlider extends Component {
  handleWeirdnessChange = (event) => {
    const { history, match } = this.props
    const value = event.target.value
    const searchTerm = match?.params?.searchTerm
    history.push(`/${searchTerm}/${value}`)

    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      Giphy.translateGif(searchTerm, value)
    }, 500)
  }

  render () {
    const { match } = this.props
    const weirdness = match?.params?.weirdness
    return (
      <S.WeirdnessSliderComponent>
        <label>Crank up the weird</label>
        <Slider min='0' max='10' onChange={this.handleWeirdnessChange} value={weirdness || 0} />
      </S.WeirdnessSliderComponent>
    )
  }
}
