import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Logo from './Logo';

const StyledHeader = styled.header`
  width: 100%;
  display: grid;
  background: silver;
  grid-template-columns: 1fr 3fr;
  padding: 1rem;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
);

export default Header;
