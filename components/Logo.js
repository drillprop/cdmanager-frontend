import React from 'react';
import styled from 'styled-components';
import { serif } from '../utils/fonts';

const StyledH1 = styled.h1`
  margin: 0;
  margin-left: 2rem;
  align-self: center;
  font-family: ${serif};
  font-weight: 400;
`;

const Logo = () => <StyledH1>Cd Manager</StyledH1>;

export default Logo;
