import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { useCollectionContext } from '../../../contexts/collection/CollectionProvider';
import Loading from '../../../elements/Loading';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import Album from '../../Album/Album';
import DeleteButton from '../../DeleteButton/DeleteButton';
import Error from '../../Error/Error';

const StyledH2 = styled.h2`
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
            const { albums } = data.albums;
            return (
              <CdsWrapper>
                {albums.map(({ artist, title, image, id }) => (
                  <Album
                    artist={artist}
                    title={title}
                    image={image}
                    key={id}
                    id={id}
                  >
                    <DeleteButton id={id} />
                  </Album>
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

export default AlbumsContainer;
