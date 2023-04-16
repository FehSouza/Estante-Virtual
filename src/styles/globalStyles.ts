import { lighten } from 'polished'
import { createGlobalStyle as css } from 'styled-components'

export const GlobalStyles = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    display: inline-block;
  }

  button,
  input,
  textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  button:hover {
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  a:hover {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.shadow};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => lighten(0.1, theme.colors.textLight)};
    border: none;
  }
`
