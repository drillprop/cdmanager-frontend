import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import LoadedImage from '../../../elements/LoadedImage';
import { CREATE_ALBUM } from '../../../utils/mutations';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
import { AddContext } from '../AddContainer';
import Button from '../../../elements/Button';
import { background } from '../../../utils/colors';
import Error from '../../../elements/Error';

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 1rem;
  padding: 1.5rem;
  align-items: center;
  :nth-child(odd) {
    background: ${background};
  }
  button {
    padding: 0.8rem 2rem;
    font-size: 0.8rem;
    text-transform: lowercase;
  }
`;

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 3px;
  img {
    object-fit: cover;
    max-width: 70px;
    max-height: 70px;
    border-radius: 3px;
  }
`;

const AlbumSearchResult = ({ artist, title, image }) => {
  const { state, dispatch } = useContext(AddContext);
  return (
    <Item>
      <ImageWrapper>
        <LoadedImage title={title} image={image} />
      </ImageWrapper>
      <Mutation
        mutation={CREATE_ALBUM}
        variables={{ artist, title, image }}
        refetchQueries={[
          {
            query: GET_ALBUMS_FROM_COLLECTION,
            variables: { limit: 3 }
          }
        ]}
        awaitRefetchQueries={true}
      >
        {(createAlbum, payload) => {
          return (
            <>
              {payload.error ? (
                <Error error={payload.error} />
              ) : (
                <div>
                  <div>{artist}</div>
                  <div>{title}</div>
                </div>
              )}
              <Button
                disabled={payload.called}
                onClick={async () => {
                  await createAlbum();
                  if (!payload.error) {
                    dispatch({ type: 'CREATE_ALBUM' });
                  }
                }}
              >
                add
              </Button>
            </>
          );
        }}
      </Mutation>
    </Item>
  );
};

export default AlbumSearchResult;
