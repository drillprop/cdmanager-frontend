import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Logo from './Logo';
import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();

const StyledHeader = styled.header`
  max-width: 1330px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  @media (max-width: 510px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
);

export default Header;
