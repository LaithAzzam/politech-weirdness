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

export const WarningMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  text-align: center;
  color: ${Colors.white060};
  
  h4 {
    margin-bottom: 5px;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
  }
`
