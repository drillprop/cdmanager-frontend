import React from 'react';
import styled from 'styled-components';
import Stars from '../../../Stars/Stars';

const StarsRatingWrapper = styled.div`
  position: relative;
`;

const StarsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StarsRating = () => {
  return (
    <StarsRatingWrapper>
      <StarsWrapper>
        <Stars fillColor='#575757' blankColor='silver' size='24px' cover={50} />
      </StarsWrapper>
    </StarsRatingWrapper>
  );
};

export default StarsRating;
