import React, { useContext } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Loading from '../../elements/Loading';
import { QueryContext } from '../../pages/collection';
import { GET_ALBUMS_FROM_COLLECTION } from '../../utils/queries';
import Error from '../../elements/Error';
import Albums from '../../elements/Albums';

const StyledH2 = styled.h2`
  text-align: center;
`;

const AlbumsContainer = () => {
  const page = useContext(QueryContext);
  return (
    <>
      <StyledH2>recently added</StyledH2>
      <Query
        query={GET_ALBUMS_FROM_COLLECTION}
        variables={{ last: 10 * (page || 1) }}
        fetchPolicy='cache-and-network'
      >
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <Loading loading={loading} />;
          const { albums } = data;
          if (albums) {
            return <Albums albums={albums} />;
          }
          return <p>no albums added</p>;
        }}
      </Query>
    </>
  );
};

export default AlbumsContainer;
