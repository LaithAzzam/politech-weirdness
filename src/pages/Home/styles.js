import styled from 'styled-components'

import { Colors, Sizes, Breakpoints } from 'app/styles'

export const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  background: ${Colors.beige10};
  color: ${Colors.gray10};
  padding-top: ${Sizes.navHeight};
  flex-shrink: 0;
  flex-grow: 1;

  @media (min-width: ${Breakpoints.main}) {
    flex-direction: row;
  }
`

export const SearchComponents = styled.div`
  ${Sizes.globalPadding};
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  @media (min-width: ${Breakpoints.main}) {
    width: 65%;
  }
`

export const SearchActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${Sizes.paddingSmall} 0 ${Sizes.paddingLarge} 0;
`
