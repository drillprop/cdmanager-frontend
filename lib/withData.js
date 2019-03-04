import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import withApollo from 'next-with-apollo';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState || {}),
      link: new HttpLink({
        credentials: 'include',
        uri: 'http://localhost:4000'
      })
    })
);
