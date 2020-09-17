import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import { useCollectionContext } from '../../contexts/collection/CollectionProvider';
import Button from '../../styles/Button';
import { GET_ALBUMS_FROM_COLLECTION } from '../../utils/queries';
import Album from '../Album/Album';
import AlbumsError from '../AlbumsError/AlbumsError';
import Loading from '../Loading/Loading';
import CollectionAlbumsFilter from './collectionAlbums/CollectionAlbumsFilter';
import DeleteButton from './collectionAlbums/DeleteButton';
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
  const { data, error, loading, variables } = useQuery(
    GET_ALBUMS_FROM_COLLECTION,
    {
      variables: {
        ...state.queryVariables,
        limit: 9,
        skip: 9 * (page || 1) - 9,
      },
      fetchPolicy: 'cache-and-network',
    }
  );
  const albums = data?.albums;
  return (
    <Wrapper>
      <CollectionAlbumsFilter />
      <StyledH2>
        {state.queryVariables.search
          ? `searching for ${state.queryVariables.search}`
          : 'recently added'}
      </StyledH2>
      {error && <AlbumsError error={error} />}
      {loading && <Loading loading={loading} />}
      {!albums?.total ? (
        <>
          <StyledH2>no albums added yet</StyledH2>
          <Button style={{ marginTop: '40px' }} small center>
            <Link href={'/add'}>
              <a> click here to add one</a>
            </Link>
          </Button>
        </>
      ) : (
        <CdsWrapper>
          {!loading &&
            albums?.albums.map(
              ({ artist, title, image, id, rateAvg, yourRate }) => (
                <SingleAlbumWrapper key={id}>
                  <Album artist={artist} title={title} image={image} id={id} />
                  <StarsRating
                    variables={variables}
                    id={id}
                    rateAvg={rateAvg || 0}
                    yourRate={yourRate?.value || 0}
                  />
                  <DeleteButton id={id} variables={variables} />
                </SingleAlbumWrapper>
              )
            )}
        </CdsWrapper>
      )}
    </Wrapper>
  );
};

export default CollectionAlbums;
