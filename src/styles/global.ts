import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #212121;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, span {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
`;
