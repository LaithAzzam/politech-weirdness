import styled, { css } from 'styled-components'

import { Colors } from 'app/styles'
import { Loading } from 'app/ui-kit'

export const SearchResultImageComponent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  padding-top: calc(100% / 5);
  border: 1px solid ${Colors.white060};
  border-radius: 8px;

  ${props => props.loading && css`
    opacity: .4;
  `}
`

export const StyledLoading = styled(Loading)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
