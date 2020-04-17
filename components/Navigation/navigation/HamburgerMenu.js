import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import styled from 'styled-components';
import { background, black } from '../../../utils/colors';
import HamburgerNavigation from './hamburgerMenu/HamburgerNavigation';

const HamburgerButton = styled.div`
  z-index: 3;
  position: fixed;
  height: 25px;
  width: 25px;
  margin-right: 3rem;
  top: 3.5em;
  right: 0;
  display: none;
  .toggle {
    z-index: 5;
    opacity: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: none;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  div {
    z-index: 4;
    position: relative;
    transition: transform 0.5s ease, background-color 0.5s ease;
    width: 25px;
    height: 4px;
    background-color: ${black};
    border-radius: 5px;
    ::after,
    ::before {
      transition: transform 0.5s ease;
      content: '';
      position: absolute;
      width: 25px;
      height: 4px;
      background-color: ${black};
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
    background-color: ${background};
  }
  .toggle:checked + div:after,
  .toggle:checked + div:before {
    top: 0;
    transform: rotate(90deg);
    background-color: ${background};
  }
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerMenu = () => {
  const [toggled, setToggle] = useState(false);
  const transitions = useTransition(toggled, null, {
    from: { transform: 'translateX(800px)' },
    enter: { transform: 'translateX(0px)' },
    leave: { transform: 'translateX(800px)' },
  });
  return (
    <>
      <HamburgerButton>
        <input
          type='checkbox'
          checked={toggled}
          onChange={() => setToggle(!toggled)}
          className='toggle'
        />
        <div />
      </HamburgerButton>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <HamburgerNavigation
              key={key}
              style={props}
              setToggle={setToggle}
            />
          )
      )}
    </>
  );
};

export default HamburgerMenu;
