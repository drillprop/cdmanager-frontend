import React from 'react';
import App, { Container } from 'next/app';
import Header from '../components/Header';
import { GlobalStyle } from '../utils/GlobalStyles';
import { Wrapper } from '../elements/Wrapper';
import withData from '../lib/withData';
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ApolloProvider client={apollo}>
          {console.log(apollo)}
          <Header />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
