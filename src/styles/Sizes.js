import { css } from 'styled-components'

import { Breakpoints } from 'app/styles'

export const navHeight = '72px'
export const xAppPadding = '90px'
export const xAppPaddingMobile = '30px'

export const sideNavWidth = '246px'

export const paddingSmall = '10px'
export const padding = '1em'
export const paddingMedium = '2em'
export const paddingLarge = '3em'

export const globalPadding = css`
  padding: ${paddingMedium};
  box-sizing: border-box;

  @media (min-width: ${Breakpoints.main}) {
    padding: ${paddingLarge};
  }
`
