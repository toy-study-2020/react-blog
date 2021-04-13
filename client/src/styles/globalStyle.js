import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  button,
  a {
    border: none;
    appearance: none;
  }
`;

export default GlobalStyle;