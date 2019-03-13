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
  padding: 1rem;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
);

export default Header;
