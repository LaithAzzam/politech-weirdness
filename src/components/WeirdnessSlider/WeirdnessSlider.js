import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import { Slider } from 'app/ui-kit'

@withRouter
export default class WeirdnessSlider extends Component {
  handleWeirdnessChange = (event) => {
    const { history, match } = this.props
    const value = event.target.value
    const searchTerm = match?.params?.searchTerm

    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      history.push(`/${searchTerm}/${value}`)
    }, 500)
  }

  render () {
    return (
      <S.WeirdnessSliderComponent>
        <label>Crank up the weird</label>
        <Slider min='0' max='10' onChange={this.handleWeirdnessChange} />
      </S.WeirdnessSliderComponent>
    )
  }
}
