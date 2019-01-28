import React from 'react';
import styled from 'styled-components';
import { mont } from '../utils/fonts';

const StyledH1 = styled.h1`
  margin: 0;
  margin-left: 2rem;
  align-self: center;
  letter-spacing: -3px;
  font-family: ${mont};
  text-transform: uppercase;
  font-weight: 700;
`;

const Logo = () => <StyledH1>Cd Manager</StyledH1>;

export default Logo;
