import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { endpoint } from '../config';

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      uri: endpoint,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
