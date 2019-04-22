import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 375px;
  @media (max-width: 1000px) {
    transform: scale(0.8);
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  transform: translateY(-40px);
  position: relative;
`;

const Shadow = styled.div`
  background: radial-gradient(#7777 1%, transparent 60%);
  width: 700px;
  height: 210px;
  border-radius: 100%;
  position: relative;
  opacity: 0.5;
  margin: 0;
  z-index: -2;
  bottom: 290px;
  right: 150px;
`;
const HeroImage = () => (
  <ImageContainer>
    <StyledImg src='/static/radio.png' alt='radio' />
    <Shadow />
  </ImageContainer>
);

export default HeroImage;
