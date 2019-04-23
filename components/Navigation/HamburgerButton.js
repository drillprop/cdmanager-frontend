import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationLinks from './NavigationLinks';

const StyledDiv = styled.div`
  position: fixed;
  height: 25px;
  width: 25px;
  margin-right: 3rem;
  top: 1.5rem;
  right: 0;
  display: none;
  .toggle {
    z-index: 10;
    opacity: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: none;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  div {
    position: relative;
    z-index: -2;
    transition: all 0.5s ease;
    width: 25px;
    height: 3px;
    background-color: red;
    border-radius: 5px;
    ::after,
    ::before {
      content: '';
      position: absolute;
      width: 25px;
      height: 3px;
      background-color: red;
    }
    ::before {
      top: -10px;
    }
    ::after {
      top: 10px;
    }
  }
  .toggle:checked + div {
    transform: rotate(135deg);
  }
  .toggle:checked + div:after,
  .toggle:checked + div:before {
    top: 0;
    transform: rotate(90deg);
  }
  @media (max-width: 510px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledNavigation = styled.nav`
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 5;
  position: fixed;
  background: black;
  opacity: 0.9;
  width: 80%;
  height: 100%;
  font-size: 2rem;

  li {
    list-style: none;
    text-transform: lowercase;
  }
`;

const HamburgerButton = ({ me, signout }) => {
  const [toggled, setToggle] = useState(false);
  return (
    <>
      <StyledDiv>
        <input
          type='checkbox'
          onChange={() => setToggle(!toggled)}
          className='toggle'
        />
        <div />
      </StyledDiv>
      {toggled && (
        <StyledNavigation>
          <NavigationLinks />
        </StyledNavigation>
      )}
    </>
  );
};

export default HamburgerButton;
