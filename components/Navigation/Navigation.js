import Router from 'next/router';
import Nprogress from 'nprogress';
import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from './navigation/HamburgerMenu';
import Logo from './navigation/Logo';
import { mont } from '../../utils/fonts';
import { lightblack, background, black } from '../../utils/colors';
import { theme } from '../../utils/theme';
import NavLinks from './navigation/NavLinks';

Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();

const StyledHeader = styled.header`
  max-width: 1150px;
  margin: 0 auto;
  margin-top: 3em;
  margin-bottom: 3em;
  display: grid;
  grid-template-columns: repeat(2, auto);
  @media (max-width: 600px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const Navigation = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavLinks />
      <HamburgerMenu />
    </StyledHeader>
  );
};

export default Navigation;
