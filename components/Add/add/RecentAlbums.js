import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Loading from '../../Loading/Loading';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import Album from '../../Album/Album';
import Error from '../../Error/Error';

const StyledH2 = styled.h2`
  margin: 60px 0 30px;
  text-align: center;
`;

const CdsWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  @media (min-width: 700px) {
    gap: 100px;
    grid-template-columns: repeat(3, 150px);
    justify-items: center;
  }
`;

const RecentAlbums = () => {
  return (
    <>
      <StyledH2>recently added</StyledH2>
      <CdsWrapper>
        <Query
          query={GET_ALBUMS_FROM_COLLECTION}
          variables={{ limit: 3 }}
          fetchPolicy='cache-and-network'
        >
          {({ data, error, loading }) => {
            if (error) return <Error error={error} />;
            if (loading) return <Loading loading={loading} withDelay />;
            if (data?.albums?.albums) {
              const { albums } = data.albums;
              return albums.map(({ artist, title, id, image }) => (
                <Album
                  large
                  key={id}
                  artist={artist}
                  title={title}
                  image={image}
                />
              ));
            }
            return <p>no albums added</p>;
          }}
        </Query>
      </CdsWrapper>
    </>
  );
};

export default RecentAlbums;
