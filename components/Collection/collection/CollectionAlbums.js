import Link from 'next/link';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { useCollectionContext } from '../../../contexts/collection/CollectionProvider';
import Button from '../../../styles/Button';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import Album from '../../Album/Album';
import Loading from '../../Loading/Loading';
import CollectionAlbumsFilter from './collectionAlbums/CollectionAlbumsFilter';
import DeleteButton from './collectionAlbums/DeleteButton';
import AlbumsError from '../../AlbumsError/AlbumsError';
import StarsRating from './collectionAlbums/StarsRating';

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  input {
    display: block;
    margin: 0 auto;
  }
  > .loading-spinner {
    margin-top: 7rem;
  }
`;

const StyledH2 = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

const CdsWrapper = styled.div`
  max-width: 800px;
  margin: 60px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 200px));
  gap: 50px 20px;
  justify-content: center;
  justify-items: center;
`;

const SingleAlbumWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 15px;
`;

const CollectionAlbums = () => {
  const { page, state } = useCollectionContext();

  return (
    <Wrapper>
      <CollectionAlbumsFilter />
      <Query
        query={GET_ALBUMS_FROM_COLLECTION}
        variables={{
          ...state.queryVariables,
          skip: 9 * (page || 1) - 9,
        }}
        fetchPolicy='cache-and-network'
      >
        {({ data, error, loading, variables }) => {
          if (error) return <AlbumsError error={error} />;
          if (loading) return <Loading loading={loading} />;
          if (data?.albums?.albums) {
            const { albums, total } = data.albums;
            if (!total)
              return (
                <>
                  <StyledH2>no albums added yet</StyledH2>
                  <Button style={{ marginTop: '40px' }} small center>
                    <Link href={'/add'}>
                      <a> click here to add one</a>
                    </Link>
                  </Button>
                </>
              );
            return (
              <>
                <StyledH2>
                  {state.queryVariables.search
                    ? `searching for ${state.queryVariables.search}`
                    : 'recently added'}
                </StyledH2>
                <CdsWrapper>
                  {albums.map(({ artist, title, image, id }) => (
                    <SingleAlbumWrapper key={id}>
                      <Album
                        artist={artist}
                        title={title}
                        image={image}
                        id={id}
                      />
                      <StarsRating />
                      <DeleteButton id={id} variables={variables} />
                    </SingleAlbumWrapper>
                  ))}
                </CdsWrapper>
              </>
            );
          }
        }}
      </Query>
    </Wrapper>
  );
};

export default CollectionAlbums;
