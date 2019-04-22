import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  cursor: pointer;
  position: fixed;
  height: 25px;
  width: 25px;
  margin-right: 3rem;
  top: 1.5rem;
  right: 0;
  display: none;
  div {
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
      top: 0px;
    }
    ::after {
      bottom: 0px;
    }
    :active {
    }
  }
  @media (max-width: 510px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerMenu = ({ me, signout }) => {
  return (
    <>
      <StyledDiv>
        <div />
      </StyledDiv>
    </>
  );
};

export default HamburgerMenu;
