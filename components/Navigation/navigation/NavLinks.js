import React from 'react';
import User from '../../../utils/User';
import Link from 'next/link';
import {
  background,
  lighterblack,
  lightblack,
  black,
} from '../../../utils/colors';
import Icon from '../../Icon/Icon';
import styled from 'styled-components';
import { mont } from '../../../utils/fonts';
import { theme } from '../../../utils/theme';

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
  li a svg {
    margin-right: 0.5rem;
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

const NavLinks = () => {
  return (
    <StyledNav>
      <User>
        {(data, signout) =>
          data && data.me ? (
            <ul>
              <li>
                <Link href='/login'>
                  <a onClick={signout}>
                    <Icon icon={'logout'} color={lighterblack} />
                    logout
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/add'>
                  <a>
                    <Icon icon={'cd'} color={lighterblack} />
                    add cd
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/collection'>
                  <a>
                    <Icon icon={'profile'} color={background} /> your collection
                  </a>
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link href='/login'>
                  <a>
                    <Icon icon={'login'} color={lighterblack}></Icon>
                    login
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/register'>
                  <a>
                    <Icon icon={'profile'} color={background}></Icon>
                    Register
                  </a>
                </Link>
              </li>
            </ul>
          )
        }
      </User>
    </StyledNav>
  );
};

export default NavLinks;
