import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { useCollectionContext } from '../contexts/collection/CollectionProvider';
import Albums from '../elements/Albums';
import Error from '../elements/Error';
import Loading from '../elements/Loading';
import { GET_ALBUMS_FROM_COLLECTION } from '../utils/queries';

const StyledH2 = styled.h2`
  text-align: center;
`;

const AlbumsContainer = () => {
  const { page } = useCollectionContext();
  return (
    <>
      <StyledH2>recently added</StyledH2>
      <Query
        query={GET_ALBUMS_FROM_COLLECTION}
        variables={{ skip: 10 * (page || 1) - 10 }}
        fetchPolicy='cache-and-network'
      >
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <Loading loading={loading} />;
          if (data?.albums?.albums) {
            return <Albums albums={data.albums.albums} deleteButton={true} />;
          }
          return <p>no albums added</p>;
        }}
      </Query>
    </>
  );
};

export default AlbumsContainer;
