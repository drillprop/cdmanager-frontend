import React from 'react';
import styled from 'styled-components';
import { robo, mont } from '../../utils/fonts';
import { theme } from '../../utils/theme';
import LoadedImage from '../LoadedImage/LoadedImage';

const StyledFigure = styled.figure`
  display: grid;
  grid-template-rows: 140px 100px 30px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border: 1px solid #909090;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 1em;
  box-shadow: ${theme.bs};
  img {
    display: block;
    max-height: 119px;
    margin: 0 auto;
  }
`;

const ArtistName = styled.h3`
  font-family: ${robo};
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Title = styled.h4`
  font-family: ${mont};
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Album = ({ artist, title, image, id, children }) => (
  <StyledFigure>
    <ImgWrapper>
      {image ? (
        <LoadedImage title={title} image={image} />
      ) : (
        <div>No image</div>
      )}
    </ImgWrapper>
    <figcaption>
      <ArtistName>{artist} </ArtistName>
      <Title>{title}</Title>
    </figcaption>
    {children}
  </StyledFigure>
);

export default Album;
