import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { black, lightblack, background } from '../utils/colors';
import { mont } from '../utils/fonts';

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
    margin-right: 2rem;
  }
  li:last-child {
    color: ${background};
    background-color: ${black};
  }
`;

const Navigation = () => (
  <StyledNav>
    <ul>
      <li>
        <Link href='/signin'>
          <a>Login</a>
        </Link>
      </li>
      <li>
        <Link href='/signup'>
          <a>Register</a>
        </Link>
      </li>
    </ul>
  </StyledNav>
);

export default Navigation;
