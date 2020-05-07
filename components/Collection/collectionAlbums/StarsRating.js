import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { robo } from '../../../utils/fonts';
import Stars from '../../Stars/Stars';

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
    display: block;
    margin: 0 auto 15px;
  }
`;

const StarsRating = ({ rateAvg, yourRate }) => {
  const [rating, setRating] = useState(0);

  return (
    <StarsWrapper>
      <span>your rating</span>
      <Stars
        fillColor='#333'
        blankColor='silver'
        height='26px'
        rating={yourRate * 10}
        setRating={setRating}
        id='your-rating'
      />
      <span>users rating</span>
      <Stars
        disableMouseEvents
        fillColor='#575757'
        blankColor='silver'
        height='18px'
        rating={rateAvg * 10}
        id='user-rating'
      />
    </StarsWrapper>
  );
};

StarsRating.propTypes = {
  rateAvg: PropTypes.number,
  yourRate: PropTypes.number,
};

export default StarsRating;
