import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import { useAddContext } from '../../../contexts/add/AddProvider';
import Button from '../../../styles/Button';
import { background } from '../../../utils/colors';
import { CREATE_ALBUM } from '../../../utils/mutations';
import LoadedImage from '../../LoadedImage/LoadedImage';

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

const SearchAlbumItem = ({ artist, title, imageLarge, imageSmall }) => {
  const { dispatch } = useAddContext();
  return (
    <Mutation
      mutation={CREATE_ALBUM}
      variables={{ artist, title, image: imageLarge }}
    >
      {(createAlbum, payload) => {
        return (
          <Item>
            <ImageWrapper>
              {imageSmall ? (
                <LoadedImage title={title} image={imageSmall} />
              ) : (
                'no cover'
              )}
            </ImageWrapper>
            {payload.error ? (
              <p>error!</p>
            ) : (
              <div>
                <div>{artist}</div>
                <div>{title}</div>
              </div>
            )}
            <Button
              type='submit'
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
