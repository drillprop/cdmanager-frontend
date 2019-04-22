import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { background, black, lightblack } from '../../utils/colors';
import { mont } from '../../utils/fonts';
import { theme } from '../../utils/theme';
import NavigationLinks from './NavigationLinks';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  ul {
    display: flex;
    align-self: center;
    margin: 0;
    padding: 0;
    flex-direction: row;
  }
  li {
    list-style: none;
    font-weight: 700;
    font-style: ${mont};
    color: ${lightblack};
    text-transform: lowercase;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-right: 3rem;
  }
  li:last-child {
    color: ${background};
    background-color: ${black};
    box-shadow: ${theme.bs};
  }
  @media (max-width: 510px) {
    display: none;
  }
`;

const Navigation = ({ me, signout }) => (
  <>
    <StyledNav>
      <NavigationLinks />
    </StyledNav>
  </>
);

export default Navigation;
