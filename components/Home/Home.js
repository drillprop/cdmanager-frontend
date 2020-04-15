import React from 'react';
import styled from 'styled-components';
import { mont, robo } from '../../utils/fonts';
import { black, lightblack } from '../../utils/colors';
import HeroImage from './home/HeroImage';
import Button from '../../styles/Button';
import Link from 'next/link';
import User from '../../utils/User';

const HeroWrapper = styled.main`
  max-width: 1200px;
  margin: 50px auto;
  overflow-x: hidden;
  margin-top: 6rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const StyledHeroHeader = styled.header`
  margin-left: 3rem;
  margin-right: 3rem;
  h1 {
    color: ${black};
    margin: 0;
    margin-bottom: 2rem;
    font-family: ${robo};
    letter-spacing: -2px;
    text-transform: uppercase;
    font-size: 1.9rem;
    font-weight: 700;
  }
  h3 {
    color: ${lightblack};
    margin: 0;
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2;
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 0.9rem;
    }
  }
`;

const Home = () => (
  <HeroWrapper>
    <StyledHeroHeader>
      <h1>Create a your own music library</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        distinctio quos sequi laudantium ipsum corporis odit! Omnis iste aliquid
        libero ab asperiores cum, porro suscipit quaerat, facere delectus odio
        magni!
      </h3>
      <Button>
        <User>
          {(data) => (
            <Link href={data && data.me ? '/collection' : '/register'}>
              <a>try it now</a>
            </Link>
          )}
        </User>
      </Button>
    </StyledHeroHeader>
    <HeroImage />
  </HeroWrapper>
);

export default Home;
