import React from 'react';
import { useMutation } from 'react-apollo';
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
  const [createAlbum, { error, called, loading }] = useMutation(CREATE_ALBUM);

  const handleCreateAlbum = async () => {
    await createAlbum({
      variables: { artist, title, image: imageLarge },
    });
    if (!error) {
      dispatch({ type: 'CREATE_ALBUM' });
    }
  };

  return (
    <Item>
      <ImageWrapper>
        {imageSmall ? (
          <LoadedImage title={title} image={imageSmall} />
        ) : (
          'no cover'
        )}
      </ImageWrapper>
      {error ? (
        <p>error!</p>
      ) : (
        <div>
          <div>{artist}</div>
          <div>{title}</div>
        </div>
      )}
      <Button type='submit' disabled={called} onClick={handleCreateAlbum}>
        {loading ? 'adding...' : 'add'}
      </Button>
    </Item>
  );
};

export default SearchAlbumItem;
