import styled from 'styled-components'

import { Sizes } from 'app/styles'
import { TextField } from 'app/ui-kit'

export const SearchSectionComponent = styled.div`
  box-sizing: border-box;
`

export const StyledSearch = styled(TextField)`
`

export const SearchTitle = styled.h2`
  font-weight: bold;
  margin: 0;
  padding: 0;
  max-width: 690px;
`

export const SearchSteps = styled.ul`
  margin: 0;
  padding: ${Sizes.paddingMedium};
`

export const SearchStep = styled.li`
  font-size: 16px;
  margin-bottom: 5px
`
