import styled from 'styled-components'

import { Colors } from 'app/styles'
import { Image } from 'app/ui-kit/Icons'

export const SearchResultImageComponent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  background: ${Colors.white020};
  overflow: hidden;
`

export const StyledImageIcon = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  stroke: ${Colors.white060};
`
