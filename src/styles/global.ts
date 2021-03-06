import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #2C2826;
    -webkit-font-smoothing: antialiased;
  }

  body , input , button {
    font-family: 'Noto Sans Jp', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500px;
  }

  button {
    cursor: pointer;
  }
  `;
