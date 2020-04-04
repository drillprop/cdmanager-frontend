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
  grid-template-columns: 2fr 4fr;
  @media (max-width: 600px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    align-self: center;
    margin: 0;
    padding: 0;
    flex-direction: row;
    margin-right: 1em;
  }
  li {
    list-style: none;
    font-weight: 700;
    font-style: ${mont};
    color: ${lightblack};
    font-size: 0.8rem;
    text-transform: lowercase;
    padding: 0.6em 1.5em;
    border-radius: 5px;
    margin-left: 2em;
  }
  li:last-child {
    color: ${background};
    background-color: ${black};
    box-shadow: ${theme.bs};
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Navigation = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <NavLinks />
      </StyledNav>
      <HamburgerMenu />
    </StyledHeader>
  );
};

export default Navigation;
