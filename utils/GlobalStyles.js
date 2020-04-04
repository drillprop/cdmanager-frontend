import { createGlobalStyle } from 'styled-components';
import { mont } from './fonts';
import { lighterblack } from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    overflow-y: scroll;
  }
  body {
    font-size: 14px;
    margin:0;
    margin-bottom: 50px;
    background: #f9f9f9;
    font-family: ${mont};
    color: ${lighterblack}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
