import React from 'react';
import styled from 'styled-components';
import { serif } from '../utils/fonts';

const StyledHeroHeader = styled.header`
  width: 300px;
  margin: 0 auto;
  h1 {
    margin: 0;
    margin-bottom: 1rem;
    font-family: ${serif};
    font-size: 3rem;
    font-weight: 400;
    text-align: right;
  }
  h3 {
    margin: 0;
    text-align: right;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
  }
`;

const Hero = () => (
  <StyledHeroHeader>
    <h1>Create a your own music library</h1>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio
      quos sequi laudantium ipsum corporis odit! Omnis iste aliquid libero ab
      asperiores cum, porro suscipit quaerat, facere delectus odio magni!{' '}
    </h3>
  </StyledHeroHeader>
);

export default Hero;
