import { createGlobalStyle } from 'styled-components';
import { sansSerif } from './fonts';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Aleo:400,700|Open+Sans:300,400,700&subset=latin-ext');
* {
  box-sizing: border-box;
}
  body {
    font-size: 14px;
    margin: 0;
    background: #f9f9f9;
    font-family: ${sansSerif}
  }
`;
