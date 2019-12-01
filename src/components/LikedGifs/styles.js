import styled from 'styled-components'

import { Sizes, Colors } from 'app/styles'

export const LikedGifsComponent = styled.div`
  ${Sizes.globalPadding};
  background-color: ${Colors.gray40};
  width: 100%;
  flex-grow: 1;
`

export const EmptyMessage = styled.h5`
  color: ${Colors.white060};
`
