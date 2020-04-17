import Link from 'next/link';
import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import { background, black } from '../../../../utils/colors';
import User from '../../../../utils/User';
import Icon from '../../../Icon/Icon';

const StyledNavigation = styled(animated.nav)`
  z-index: 1;
  display: none;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  background: ${black};
  width: 80%;
  height: 100%;
  font-size: 1.2rem;
  ul {
    margin-top: 10rem;
    padding: 0;
    margin-left: 30px;
  }
  li {
    color: ${background};
    list-style: none;
    position: relative;
    text-transform: lowercase;
    margin-bottom: 3rem;
  }
  li a svg {
    margin-right: 2rem;
  }
  @media (max-width: 700px) {
    display: block;
  }
`;

const HamburgerNavigation = ({ style, setToggle }) => {
  return (
    <StyledNavigation style={style}>
      <User>
        {({ me }, signout) =>
          me ? (
            <ul>
              <li onClick={() => setToggle(false)}>
                <Link href='/collection'>
                  <a>
                    <Icon icon='profile' />
                    your profile
                  </a>
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link href='/add'>
                  <a>
                    <Icon icon='cd' />
                    add an album
                  </a>
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link href='/login'>
                  <a onClick={signout}>
                    <Icon icon='logout' />
                    logout
                  </a>
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li onClick={() => setToggle(false)}>
                <Link href='/login'>
                  <a>login</a>
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link href='/register'>
                  <a>Register</a>
                </Link>
              </li>
            </ul>
          )
        }
      </User>
    </StyledNavigation>
  );
};

export default HamburgerNavigation;
