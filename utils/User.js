import gql from 'graphql-tag';
import React from 'react';
import { Query, Mutation } from 'react-apollo';

const QUERY_ME = gql`
  query QUERY_ME {
    me {
      name
      email
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
const User = (props) => {
  return (
    <Query {...props} query={QUERY_ME}>
      {({ data }) => {
        if (data) {
          return (
            <Mutation
              mutation={SIGNOUT}
              refetchQueries={[
                {
                  query: QUERY_ME,
                },
              ]}
            >
              {(signout) => props.children(data, signout)}
            </Mutation>
          );
        } else {
          return props.children();
        }
      }}
    </Query>
  );
};

export default User;
export { QUERY_ME, SIGNOUT };
