import { createGlobalStyle } from 'styled-components';
import { mont } from './fonts';
import { lighterblack } from './colors';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    font-size: 14px;
    margin: 0;
    background: #f9f9f9;
    font-family: ${mont};
    color: ${lighterblack}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
`;
