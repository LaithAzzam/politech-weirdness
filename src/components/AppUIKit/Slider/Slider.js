import React from 'react'
import PropTypes from 'prop-types'
import { asField } from 'informed'

import * as S from './styles'

const Slider = asField(props => {
  const { min, max, ...rest } = props

  return (
    <S.SliderComponent>
      <S.StyledRangeInput
        {...rest}
        min={min}
        max={max}
        type='range'
      />
    </S.SliderComponent>
  )
})

const SliderWrap = props => <Slider {...props} />

SliderWrap.propTypes = {
  /** Minum and maximum input values */
  min: PropTypes.string,
  max: PropTypes.string
}

SliderWrap.defaultProps = {
  min: 0,
  max: 10
}

export default SliderWrap
