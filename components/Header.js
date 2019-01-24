import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Logo from './Logo';

const StyledHeader = styled.header`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 1rem;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
);

export default Header;
