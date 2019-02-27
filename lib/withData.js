import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';
import { endpoint } from '../urls';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      credentials: 'include',
      uri: endpoint,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
