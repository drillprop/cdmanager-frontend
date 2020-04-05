import React from 'react';
import styled from 'styled-components';
import { robo, mont } from '../../utils/fonts';
import { theme } from '../../utils/theme';
import LoadedImage from '../LoadedImage/LoadedImage';

const StyledFigure = styled.figure`
  display: grid;
  margin: 0;
  grid-template-rows: ${(props) => (props.large ? '150px' : '120px')} auto 30px;
  grid-template-columns: ${(props) => (props.large ? '150px' : '120px')};
  justify-content: center;
  justify-content: center;
  gap: 20px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #909090;
  border-radius: 5px;
  background-color: white;
  box-shadow: ${theme.bs};
  img {
    display: block;
    max-height: 100%;
    margin: 0 auto;
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
  margin-top: 20px;
`;

const Album = ({ artist, title, image, id, children, large }) => (
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
    {children}
  </StyledFigure>
);

export default Album;
