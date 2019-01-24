import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
    font-weight: 400;
    text-transform: uppercase;
    margin-right: 2rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const Navigation = () => (
  <StyledNav>
    <ul>
      <li>
        <Link href='/signup'>
          <a>Sign Up</a>
        </Link>
      </li>
      <li>
        <Link href='/signin'>
          <a>Sign In</a>
        </Link>
      </li>
    </ul>
  </StyledNav>
);

export default Navigation;
