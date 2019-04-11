import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import LoadedImage from '../../elements/LoadedImage';
import { CREATE_ALBUM } from '../../utils/mutations';
import { GET_ALBUMS_LENGTH } from '../../utils/queries';

const Item = styled.li`
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #909090;
  border-radius: 3px;
  img {
    object-fit: cover;
    max-width: 70px;
    max-height: 70px;
  }
`;

const AlbumSearchResult = ({ artist, title, image }) => {
  return (
    <Item>
      <ImageWrapper>
        <LoadedImage title={title} image={image} />
      </ImageWrapper>
      <div>
        <div>{artist}</div>
        <div>{title}</div>
      </div>
      <Mutation
        mutation={CREATE_ALBUM}
        variables={{ artist, title, image }}
        refetchQueries={[{ query: GET_ALBUMS_LENGTH }]}
      >
        {(createAlbum, payload) => {
          return (
            <button disabled={payload.called} onClick={() => createAlbum()}>
              add
            </button>
          );
        }}
      </Mutation>
    </Item>
  );
};

export default AlbumSearchResult;
