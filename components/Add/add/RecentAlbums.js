import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import Album from '../../Album/Album';
import Loading from '../../Loading/Loading';
import AlbumsError from '../../AlbumsError/AlbumsError';

const StyledH2 = styled.h2`
  margin: 60px 0 30px;
  text-align: center;
`;

const CdsWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  gap: 80px;
  .error-message {
    grid-column: 1/6;
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 150px);
    justify-items: center;
  }
`;

const RecentAlbums = () => {
  return (
    <>
      <Query
        query={GET_ALBUMS_FROM_COLLECTION}
        variables={{ limit: 3 }}
        fetchPolicy='cache-and-network'
      >
        {({ data, error, loading }) => {
          if (error) return <AlbumsError error={error}></AlbumsError>;
          if (loading) return <Loading loading={loading} withDelay />;
          if (data?.albums?.albums) {
            const { albums } = data.albums;
            return (
              <>
                <StyledH2>recently added</StyledH2>
                <CdsWrapper>
                  {albums.map(
                    (album) =>
                      album && (
                        <Album
                          large
                          key={album.id}
                          artist={album.artist}
                          title={album.title}
                          image={album.image}
                        />
                      )
                  )}
                </CdsWrapper>
              </>
            );
          }
          return <p>no albums added</p>;
        }}
      </Query>
    </>
  );
};

export default RecentAlbums;
