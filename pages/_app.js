import React from 'react';
import App, { Container } from 'next/app';
import Header from '../components/Header';
import { GlobalStyle } from '../utils/GlobalStyles';
import { Wrapper } from '../elements/Wrapper';
import withData from '../lib/withData';
import { ApolloProvider } from 'react-apollo';
import { PageTransition } from 'next-page-transitions';
import Meta from '../components/Meta';

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
          <Wrapper>
            <PageTransition timeout={300} classNames='page-transition'>
              <Component {...pageProps} />
            </PageTransition>
          </Wrapper>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
