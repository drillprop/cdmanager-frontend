import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 500px;
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
  position: absolute;
  opacity: 0.5;
  margin: 0;
  z-index: -1;
  top: 120px;
  left: -165px;
`;
const HeroImage = () => (
  <ImageContainer>
    <StyledImg src='/radio.png' alt='radio' />
    <Shadow />
  </ImageContainer>
);

export default HeroImage;
