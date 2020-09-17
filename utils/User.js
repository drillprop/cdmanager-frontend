import gql from 'graphql-tag';
import { useMutation, useQuery } from 'react-apollo';

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
  const [signout] = useMutation(SIGNOUT, {
    refetchQueries: [
      {
        query: QUERY_ME,
      },
    ],
  });

  const { data } = useQuery(QUERY_ME);
  if (data) {
    return props.children(data, signout);
  } else {
    return props.children();
  }
};

export default User;
export { QUERY_ME, SIGNOUT };
