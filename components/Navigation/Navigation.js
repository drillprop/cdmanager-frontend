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

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  ul {
    display: flex;
    align-self: center;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    font-weight: 700;
    font-style: ${mont};
    color: ${lightblack};
    font-size: 0.8rem;
    text-transform: lowercase;
    padding: 0.6rem 1.5em;
    border-radius: 5px;
    margin-left: 1rem;
  }
  li:last-child {
    position: relative;
    color: ${background};
    background-color: ${black};
    box-shadow: ${theme.bs};
    ::after {
      position: absolute;
      color: ${black};
      left: 0;
      top: 3rem;
      font-weight: 500;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const NavItem = styled.li``;

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
