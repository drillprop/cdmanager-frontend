import styled from 'styled-components';
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import User from '../../../../utils/User';
import Link from 'next/link';
import { lighterblack, black, background } from '../../../../utils/colors';

const StyledNavigation = styled(animated.nav)`
  display: none;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 5;
  position: fixed;
  background: ${black};
  width: 80%;
  height: 100%;
  font-size: 2rem;
  li {
    color: ${background};
    list-style: none;
    position: relative;
    text-transform: lowercase;
    margin-bottom: 2rem;
    ::after {
      content: '';
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${lighterblack};
    }
  }
  @media (max-width: 600px) {
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
                  <a> {me.name}</a>
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link href='/add'>
                  <a>add</a>
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link href='/login'>
                  <a onClick={signout}>logout</a>
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
