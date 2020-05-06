import React from 'react';
import styled from 'styled-components';
import Stars from '../../../Stars/Stars';
import { robo } from '../../../../utils/fonts';

const StarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    :first-of-type {
      margin: 0 0 7px;
      font-size: 0.8rem;
    }
    margin: 15px 0 5px;
    font-family: ${robo};
    font-size: 0.7rem;
    text-align: center;
    font-style: italic;
  }
  svg {
    margin-bottom: 15px;
  }
`;

const StarsRating = () => {
  return (
    <StarsWrapper>
      <span>your rating</span>
      <Stars
        fillColor='#333'
        blankColor='silver'
        size='26px'
        cover={50}
        id='your-rating'
      />
      <span>users rating</span>
      <Stars
        fillColor='#575757'
        blankColor='silver'
        size='18px'
        cover={50}
        id='user-rating'
      />
    </StarsWrapper>
  );
};

export default StarsRating;
