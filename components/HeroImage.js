import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
  transform: translateY(-40px);
`;

const Shadow = styled.div`
  background: radial-gradient(#7777 1%, transparent 60%);
  width: 700px;
  height: 210px;
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;
  margin: 0;
  z-index: -2;
  bottom: 50px;
  left: -150px;
`;
const HeroImage = () => (
  <ImageContainer>
    <StyledImg src='/static/radio.png' alt='radio' />
    <Shadow />
  </ImageContainer>
);

export default HeroImage;
