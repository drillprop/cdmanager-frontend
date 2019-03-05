import gql from 'graphql-tag';
import React from 'react';
import { Query, Mutation } from 'react-apollo';

const QUERY_ME = gql`
  query QUERY_ME {
    me {
      name
      email
      avatar
    }
  }
`;

const SIGNOUT = gql`
  mutation SIGNOUT {
    signout {
      message
    }
  }
`;
const User = props => {
  return (
    <Query {...props} query={QUERY_ME}>
      {({ data, loading, error }) => {
        if (error) return <div>error.message</div>;
        if (loading) return <div>loading</div>;
        return (
          <Mutation mutation={SIGNOUT}>
            {signout => props.children(data, signout)}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default User;
export { QUERY_ME };
