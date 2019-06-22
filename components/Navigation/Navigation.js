import React from 'react';
import styled from 'styled-components';
import { background, black, lightblack } from '../../utils/colors';
import { mont } from '../../utils/fonts';
import { theme } from '../../utils/theme';
import NavLinks from './NavLinks';

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

const Navigation = () => (
  <>
    <StyledNav>
      <NavLinks />
    </StyledNav>
  </>
);

export default Navigation;
