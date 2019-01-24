import React from 'react';
import styled from 'styled-components';

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
    margin-right: 2rem;
  }
`;

const Navigation = () => (
  <StyledNav>
    <ul>
      <li>Sign Up</li>
      <li>Sign In</li>
    </ul>
  </StyledNav>
);

export default Navigation;
