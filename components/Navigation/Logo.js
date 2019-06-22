import React from 'react';
import styled from 'styled-components';
import { mont } from '../../utils/fonts';
import { black } from '../../utils/colors';
import Link from 'next/link';

const StyledH1 = styled.h1`
  margin: 0;
  margin-left: 1em;
  align-self: center;
  letter-spacing: -3px;
  font-family: ${mont};
  color: ${black};
  text-transform: lowercase;
  font-size: 2rem;
  font-weight: 700;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = () => (
  <StyledH1>
    <Link href='/'>
      <a>Cd Manager</a>
    </Link>
  </StyledH1>
);

export default Logo;
