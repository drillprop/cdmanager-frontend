import React, { useState } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import LoadedImage from '../elements/LoadedImage';

const CREATE_CD = gql`
  mutation CREATE_CD($title: String!, $artist: String!, $image: String) {
    createCd(title: $title, artist: $artist, image: $image) {
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
      <Mutation mutation={CREATE_CD} variables={{ artist, title, image }}>
        {(createCd, payload) => {
          return (
            <button disabled={payload.called} onClick={() => createCd()}>
              add
            </button>
          );
        }}
      </Mutation>
    </Item>
  );
};

export default AlbumSearchResult;
