import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Loading from '../../../elements/Loading';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import Albums from '../../../elements/Albums';
import Error from '../../../elements/Error';

const StyledH2 = styled.h2`
  margin: 2rem 0;
  text-align: center;
`;

const RecentAlbums = () => {
  return (
    <>
      <StyledH2>recently added</StyledH2>
      <Query
        query={GET_ALBUMS_FROM_COLLECTION}
        variables={{ limit: 3 }}
        fetchPolicy='cache-and-network'
      >
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <Loading loading={loading} />;
          if (data?.albums?.albums) {
            return <Albums albums={data.albums.albums} />;
          }
          return <p>no albums added</p>;
        }}
      </Query>
    </>
  );
};

export default RecentAlbums;
