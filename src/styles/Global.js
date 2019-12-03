import { createGlobalStyle } from 'styled-components'

import { Colors, Type } from 'app/styles'

export const GlobalStyle = createGlobalStyle`
  html, body {
    ${Type.body};
    font-family: ${Type.fontFace};
    margin: 0;
    padding: 0;
    max-width: 100vw;
    height: 100%;
    overflow-x: hidden;
    background-color: ${Colors.beige10};
    color: ${Colors.gray10};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  ::selection {
    background: ${Colors.brand40};
  }

  #app {
    height: 100%;
  }
`
