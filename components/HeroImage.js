import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 700px;
  display: block;
  margin: 0 auto;
  position: relative;
  top: -75px;
`;

const Shadow = styled.div`
  background: radial-gradient(#7777 1%, transparent 60%);
  width: 100px;
  height: 30px;
  border-radius: 100%;
  position: relative;
  opacity: 0.5;
  margin: 0;
  z-index: -2;
  left: 200px;
  bottom: 220px;
  transform: scale(7);
`;
const HeroImage = () => (
  <div>
    <StyledImg src='/static/radio.png' alt='radio' />
    <Shadow />
  </div>
);

export default HeroImage;
