import styled from 'styled-components'

import { Sizes, Colors } from 'app/styles'
import { SearchResultImage } from 'app/components'

export const LikedGifsComponent = styled.div`
  ${Sizes.globalPadding};
  background-color: ${Colors.gray40};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${Colors.white060};
  flex-grow: 1;
  overflow-y: auto;
  height: 100%;
  
  h4 {
    margin-bottom: 5px;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
  }

  img {
    width: 100%;
  }
`

export const EmptyMessage = styled.h5`
  color: ${Colors.white060};
`

export const StyledSearchResultImage = styled(SearchResultImage)`
  margin-bottom: ${Sizes.padding};

  &:first-of-type {
    margin-top: ${Sizes.paddingMedium};
  }
`
