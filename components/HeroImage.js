import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 700px;
  display: block;
  margin: 0 auto;
  position: relative;
  top: -75px;
`;

const HeroImage = () => (
  <div>
    <StyledImg src='/static/radio.png' alt='radio' />
  </div>
);

export default HeroImage;
