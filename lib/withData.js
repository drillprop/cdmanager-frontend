import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';
import { endpoint } from '../urls';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: endpoint,
      credentials: 'same-origin',
      cache: new InMemoryCache().restore(initialState || {})
    })
);
