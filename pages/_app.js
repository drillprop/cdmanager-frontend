import React from 'react';
import App, { Container } from 'next/app';
import Header from '../components/Header';
import { GlobalStyle } from '../utils/GlobalStyles';
import { Wrapper } from '../elements/Wrapper';
import withData from '../lib/withData';
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ApolloProvider client={apollo}>
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
