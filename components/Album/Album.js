import React from 'react';
import styled from 'styled-components';
import { robo, mont } from '../../utils/fonts';
import { theme } from '../../utils/theme';
import LoadedImage from '../LoadedImage/LoadedImage';

const StyledFigure = styled.figure`
  display: grid;
  margin: 0;
  grid-template-rows: ${(props) => (props.large ? '150px' : '120px')} auto;
  grid-template-columns: ${(props) => (props.large ? '150px' : '120px')};
  justify-content: center;
  gap: 20px;
  figcaption {
    display: grid;
    grid-template-rows: minmax(30px, 1fr) 1fr;
    gap: 10px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #909090;
  border-radius: 3px;
  background-color: white;
  box-shadow: ${theme.bs};
  img {
    display: block;
    height: 100%;
  }
`;

const ArtistName = styled.h3`
  text-align: center;
  font-family: ${robo};
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
`;

const Title = styled.h4`
  text-align: center;
  font-family: ${mont};
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0;
`;

const Album = ({ artist, title, image, large }) => (
  <StyledFigure large={large}>
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
  </StyledFigure>
);

export default Album;
