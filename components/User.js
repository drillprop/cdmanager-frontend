import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

const QUERY_ME = gql`
  query QUERY_ME {
    me {
      name
      email
      avatar
      _id
    }
  }
`;
const User = props => {
  return (
    <Query {...props} query={QUERY_ME}>
      {({ data, loading, error }) => {
        if (error) return <div>error.message</div>;
        if (loading) return <div>loading</div>;
        return props.children(data);
      }}
    </Query>
  );
};

export default User;
