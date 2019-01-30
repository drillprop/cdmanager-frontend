import React from 'react';
import styled from 'styled-components';
import { black, background } from '../utils/colors';

const StyledButton = styled.button`
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-transform: uppercase;
  margin-top: 2rem;
  background: ${black || 'black'};
  color: ${background};
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
