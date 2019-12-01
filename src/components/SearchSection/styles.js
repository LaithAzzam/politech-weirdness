import styled from 'styled-components'

import { Sizes } from 'app/styles'
import { TextField } from 'app/ui-kit'

export const SearchSectionComponent = styled.div`
  box-sizing: border-box;

  p {
    margin-bottom: ${Sizes.padding};

    &:last-of-type {
      margin-bottom: ${Sizes.paddingLarge};
    }
  }
`

export const StyledSearch = styled(TextField)`
`
