import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import { useAddContext } from '../../../../contexts/add/AddProvider';
import Button from '../../../../styles/Button';
import Error from '../../../Error/Error';
import { background } from '../../../../utils/colors';
import { CREATE_ALBUM } from '../../../../utils/mutations';
import {
  GET_ALBUMS_FROM_COLLECTION,
  GET_ALBUMS_LENGTH,
} from '../../../../utils/queries';
import LoadedImage from '../../../LoadedImage/LoadedImage';

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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  img {
    object-fit: cover;
    max-width: 70px;
    max-height: 70px;
    border-radius: 3px;
  }
`;

const SearchAlbumItem = ({ artist, title, image }) => {
  const { dispatch } = useAddContext();
  return (
    <Mutation
      mutation={CREATE_ALBUM}
      variables={{ artist, title, image }}
      refetchQueries={[
        {
          query: GET_ALBUMS_FROM_COLLECTION,
          variables: { limit: 3 },
        },
        {
          query: GET_ALBUMS_LENGTH,
        },
      ]}
      awaitRefetchQueries={true}
    >
      {(createAlbum, payload) => {
        return (
          <Item>
            <ImageWrapper>
              {image ? <LoadedImage title={title} image={image} /> : 'no cover'}
            </ImageWrapper>
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
              {payload.loading ? 'adding...' : 'add'}
            </Button>
          </Item>
        );
      }}
    </Mutation>
  );
};

export default SearchAlbumItem;
