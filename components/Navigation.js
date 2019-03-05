import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { background, black, lightblack } from '../utils/colors';
import { mont } from '../utils/fonts';
import { theme } from '../utils/theme';
import User from './User';

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
    box-shadow: ${theme.bs};
  }
`;

const Navigation = () => (
  <StyledNav>
    <User>
      {({ me }) => (
        <ul>
          <li>
            {me ? (
              <Link href='/signin'>
                <a>logout</a>
              </Link>
            ) : (
              <Link href='/signin'>
                <a>login</a>
              </Link>
            )}
          </li>
          <li>
            {me ? (
              <Link href='/dashboard'>
                <a>{me.name}</a>
              </Link>
            ) : (
              <Link href='/signup'>
                <a>Register</a>
              </Link>
            )}
          </li>
        </ul>
      )}
    </User>
  </StyledNav>
);

export default Navigation;
