import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Loading from '../../elements/Loading';
import { GET_ALBUMS_FROM_COLLECTION } from '../../utils/queries';
import Album from '../../elements/Album';

const StyledH2 = styled.h2`
  margin: 2rem 0;
  text-align: center;
`;
const CdContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RecentAlbums = () => {
  return (
    <>
      <StyledH2>recently added</StyledH2>
      <CdContainer>
        <Query
          query={GET_ALBUMS_FROM_COLLECTION}
          variables={{ last: 4 }}
          fetchPolicy='cache-and-network'
        >
          {({ data, error, loading }) => {
            if (error) return <div>{error.message}</div>;
            if (loading) return <Loading loading={loading} />;
            const { albums } = data;
            if (albums) {
              return albums.map(({ artist, title, image, id }) => (
                <Album
                  artist={artist}
                  title={title}
                  image={image}
                  key={id}
                  id={id}
                />
              ));
            }
            return <p>no albums added</p>;
          }}
        </Query>
      </CdContainer>
    </>
  );
};

export default RecentAlbums;
