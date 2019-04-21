import React from 'react';
import App, { Container } from 'next/app';
import Header from '../components/Navigation/Header';
import { GlobalStyle } from '../utils/GlobalStyles';
import withData from '../lib/withData';
import { ApolloProvider } from 'react-apollo';
import { PageTransition } from 'next-page-transitions';
import Meta from '../utils/Meta';

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
          <Meta />
          <Header />
          <PageTransition timeout={300} classNames='page-transition'>
            <Component {...pageProps} />
          </PageTransition>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
