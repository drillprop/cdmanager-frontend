import React from 'react';
import App, { Container } from 'next/app';
import Header from '../components/Header';
import { GlobalStyle } from '../utils/GlobalStyles';
import { Wrapper } from '../elements/Wrapper';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Header />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Container>
    );
  }
}
