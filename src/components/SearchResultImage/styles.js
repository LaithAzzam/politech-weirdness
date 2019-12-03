import styled, { css } from 'styled-components'

import { Colors } from 'app/styles'
import { Image } from 'app/ui-kit/Icons'

export const SearchResultImageComponent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  padding-top: calc(100% / 5);
  border-radius: 8px;
  background: ${Colors.white020} url(${props => props.imageUrl})center center / cover no-repeat;

  ${props => props.loading && css`
    opacity: .4;
  `}
`

export const StyledImageIcon = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  stroke: ${Colors.white060};
`
