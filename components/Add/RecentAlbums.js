import React from 'react';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import { useAddContext } from '../../contexts/add/AddProvider';
import { GET_ALBUMS_FROM_COLLECTION } from '../../utils/queries';
import Album from '../Album/Album';
import AlbumsError from '../AlbumsError/AlbumsError';
import Loading from '../Loading/Loading';

const StyledH2 = styled.h2`
  margin: 60px 0 30px;
  text-align: center;
`;

const CdsWrapper = styled.section`
  max-width: 800px;
  margin: 60px auto;
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
  const { state } = useAddContext();
  const { data, error, loading } = useQuery(GET_ALBUMS_FROM_COLLECTION, {
    variables: { limit: 3 },
    fetchPolicy: 'cache-and-network',
  });
  if (!state.isRecentAlbumsVisible) return null;

  if (error) return <AlbumsError error={error} />;
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
};

export default RecentAlbums;
