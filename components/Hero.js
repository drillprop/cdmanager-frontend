import React from 'react';
import styled from 'styled-components';
import { mont, robo } from '../utils/fonts';
import { black, lightblack } from '../utils/colors';
import HeroImage from './HeroImage';

const HeroContainer = styled.div`
  margin: 0 auto;
  margin-top: 7rem;
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr 1fr;
`;

const StyledHeroHeader = styled.header`
  h1 {
    color: ${black};
    margin: 0;
    margin-bottom: 1rem;
    font-family: ${robo};
    letter-spacing: -2px;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
  }
  h3 {
    color: ${lightblack};
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2;
  }
`;

const Hero = () => (
  <HeroContainer>
    <StyledHeroHeader>
      <h1>Create a your own music library</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        distinctio quos sequi laudantium ipsum corporis odit! Omnis iste aliquid
        libero ab asperiores cum, porro suscipit quaerat, facere delectus odio
        magni!{' '}
      </h3>
    </StyledHeroHeader>
    <HeroImage />
  </HeroContainer>
);

export default Hero;
