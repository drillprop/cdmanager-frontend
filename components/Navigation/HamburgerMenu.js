import React, { useState } from 'react';
import styled from 'styled-components';
import { black } from '../../utils/colors';
import { useTransition, animated } from 'react-spring';
import HamburgerNavigation from './HamburgerNavigation';

const HamburgerButton = styled.div`
  position: fixed;
  height: 25px;
  width: 25px;
  margin-right: 3rem;
  top: 3.5em;
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
    background-color: ${black};
    border-radius: 5px;
    ::after,
    ::before {
      content: '';
      position: absolute;
      width: 25px;
      height: 3px;
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
  }
  .toggle:checked + div:after,
  .toggle:checked + div:before {
    top: 0;
    transform: rotate(90deg);
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerMenu = () => {
  const [toggled, setToggle] = useState(false);
  const transitions = useTransition(toggled, null, {
    from: { transform: 'translateX(-800px)' },
    enter: { transform: 'translateX(0px)' },
    leave: { transform: 'translateX(-800px)' }
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
