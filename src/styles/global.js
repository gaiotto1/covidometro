import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme['gray-200']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Spectral', serif;
    margin: 0;
    padding: 0;
  }

  input, button, textarea {
    font-family: 'Spectral', serif;
  }
`
