import React from 'react';
import styled from 'styled-components';

const Shape = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -100px;
  width: 430px;
  height: 430px;
  border: 1px solid #333;
  background: white;
  box-shadow: inset 0 0 0 10px white, inset 0 0 0 165px #333,
    inset 0 0 0 175px white, inset 0 0 0 176px #333, inset 0 0 0 200px white,
    inset 0 0 0 201px black;
  border-radius: 50%;
  transition: all 1500ms;
  :hover {
    transition: all 1500ms;
    transform: translateX(120px) rotate(360deg);
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Text = styled.span`
  position: relative;
  overflow: hidden;
  top: 45%;
  left: 76%;
  color: white;
`;

const CdShape = ({ text }) => (
  <Shape className='cd'>
    <Text>{text}</Text>
  </Shape>
);

export default CdShape;
