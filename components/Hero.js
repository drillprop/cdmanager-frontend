import React from 'react';
import styled from 'styled-components';
import { mont, robo } from '../utils/fonts';

const HeroContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledHeroHeader = styled.header`
  h1 {
    margin: 0;
    margin-bottom: 1rem;
    font-family: ${robo};
    letter-spacing: -2px;
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 700;
    text-align: right;
  }
  h3 {
    margin: 0;
    text-align: right;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.2;
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
  </HeroContainer>
);

export default Hero;
