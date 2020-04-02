import React from 'react';
import App from 'next/app';
import { GlobalStyle } from '../utils/GlobalStyles';
import withData from '../lib/withData';
import { ApolloProvider } from 'react-apollo';
import Meta from '../utils/Meta';
import Navigation from '../components/Navigation';

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
      <>
        <GlobalStyle />
        <ApolloProvider client={apollo}>
          <Meta />
          <Navigation />
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withData(MyApp);
