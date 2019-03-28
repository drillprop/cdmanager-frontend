import React from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import LoadedImage from '../elements/LoadedImage';
import { GET_ALBUMS_LENGTH } from './Pagination';

const CREATE_ALBUM = gql`
  mutation CREATE_ALBUM($title: String!, $artist: String!, $image: String) {
    createAlbum(title: $title, artist: $artist, image: $image) {
      title
      artist
      image
      id
    }
  }
`;

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
