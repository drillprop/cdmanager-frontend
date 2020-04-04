import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Loading from '../../../elements/Loading';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import Album from '../../Album/Album';
import Error from '../../Error/Error';

const StyledH2 = styled.h2`
  margin: 2rem 0;
  text-align: center;
`;

const CdsWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-content: center;
  justify-items: center;
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
            const { albums } = data.albums;
            return (
              <CdsWrapper>
                {albums.map(({ artist, title, id, image }) => (
                  <Album key={id} artist={artist} title={title} image={image} />
                ))}
              </CdsWrapper>
            );
          }
          return <p>no albums added</p>;
        }}
      </Query>
    </>
  );
};

export default RecentAlbums;
