import React from 'react';
import styled from 'styled-components';

const Shape = styled.div`
  position: absolute;
  top: 0;
  left: 120px;
  width: 480px;
  height: 480px;
  border: 1px solid #333;
  background: white;
  box-shadow: inset 0 0 0 10px white, inset 0 0 0 165px #333,
    inset 0 0 0 175px white, inset 0 0 0 176px #333, inset 0 0 0 205px white,
    inset 0 0 0 206px black;
  border-radius: 50%;
  :hover {
    transition: all 5000ms;
    transform: rotate(1000deg);
  }
`;
const Text = styled.span`
  position: relative;
  top: 45%;
  left: 70%;
  color: white;
`;

const CdShape = () => (
  <Shape>
    {' '}
    <Text>hello</Text>{' '}
  </Shape>
);

export default CdShape;
