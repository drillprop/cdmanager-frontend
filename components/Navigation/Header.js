import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Router from 'next/router';
import Nprogress from 'nprogress';
import NavigationContainer from './NavigationContainer';

Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();

const StyledHeader = styled.header`
  max-width: 1330px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  @media (max-width: 600px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <NavigationContainer />
  </StyledHeader>
);

export default Header;
