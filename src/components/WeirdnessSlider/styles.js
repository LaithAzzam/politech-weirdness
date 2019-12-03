import styled from 'styled-components'

import { Sizes } from 'app/styles'

export const WeirdnessSliderComponent = styled.div`
  margin: ${Sizes.paddingLarge} 0;
  margin-top: ${Sizes.padding};
  margin-right: ${Sizes.padding};
  width: 100%;

  input {
    width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-left: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
  }
`
