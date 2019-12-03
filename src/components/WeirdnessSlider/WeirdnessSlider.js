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
        <Slider min='0' max='10' onChange={this.handleWeirdnessChange} value={weirdness || 0} list="tickmarks" />
        <datalist id="tickmarks">
          <option value="0" label="0"></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="5" label="50%"></option>
          <option value="6"></option>
          <option value="7"></option>
          <option value="8"></option>
          <option value="9"></option>
          <option value="10" label="100%"></option>
        </datalist>
      </S.WeirdnessSliderComponent>
    )
  }
}
