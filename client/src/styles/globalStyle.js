import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body,
  #root {
    height: 100%;
  }

  button,
  a {
    border: none;
    appearance: none;
  }

  main {
    padding: 80px 100px 0;
    min-height: calc(100% - 80px);
    box-sizing: border-box;
  }

  footer {
    display: flex;
    height: 80px;
    background-color: #1d1d1d;
    color: #fff;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;