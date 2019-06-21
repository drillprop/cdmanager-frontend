import React from 'react';
import LoadedImage from '../../../elements/LoadedImage';
import styled from 'styled-components';

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

const AlbumImage = ({ title, image }) => {
  return (
    <ImageWrapper>
      <LoadedImage title={title} image={image} />
    </ImageWrapper>
  );
};

export default AlbumImage;
