import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { background, black } from '../../utils/colors';

const Shape = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -150px;
  width: 500px;
  height: 500px;
  border: 1px solid #333;
  background: white;
  box-shadow: inset 0 0 0 10px white, inset 0 0 0 185px #333,
    inset 0 0 0 195px white, inset 0 0 0 196px #333, inset 0 0 0 220px white,
    inset 0 0 0 221px black;
  border-radius: 50%;
  transition: transform 800ms;
  :hover {
    transform: translateX(120px) rotate(180deg);
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Question = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${background};
  position: absolute;
  width: 90px;
  top: 45%;
  left: 70%;
`;

const Answer = styled.a`
  font-size: 20px;
  position: absolute;
  background-color: ${background};
  padding: 5px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  top: 45%;
  left: 10%;
  color: ${black};
  transform: rotate(180deg);
`;

const CdShape = ({ question, answer, link }) => (
  <Shape className='cd'>
    <Question>{question}</Question>
    <Link href={link}>
      <Answer>{answer}</Answer>
    </Link>
  </Shape>
);

export default CdShape;
