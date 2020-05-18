import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from '../../styles/Button';
import { black, lightblack } from '../../utils/colors';
import { robo } from '../../utils/fonts';
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

const Home = () => (
  <HeroWrapper>
    <StyledHeroHeader>
      <h1>Create your own music library</h1>
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
    <ImageContainer>
      <StyledImg src='/radio.png' alt='radio' />
      <Shadow />
    </ImageContainer>
  </HeroWrapper>
);

export default Home;
