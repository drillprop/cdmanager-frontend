import { createGlobalStyle } from 'styled-components';
import { mont } from './fonts';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    font-size: 14px;
    margin: 0;
    background: #f9f9f9;
    font-family: ${mont}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
