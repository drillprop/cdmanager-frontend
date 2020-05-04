import React from 'react';
import Star from '../../../Star/Star';
import styled from 'styled-components';

const StarsRatingWrapper = styled.div`
  position: relative;
`;

const StarsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StarsRating = () => {
  const generateStars = () => {
    const rating = 9 / 2;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      let cover = 0;

      if (i <= rating) {
        cover = 100;
      } else {
        if (i - rating > 1) {
          cover = 0;
        } else {
          cover = (1 - (i - rating)) * 100;
        }
      }
      stars.push(
        <Star
          key={i}
          fillColor='#575757'
          idx={i}
          blankColor='silver'
          size='24px'
          cover={cover}
        />
      );
    }
    return stars;
  };

  return (
    <StarsRatingWrapper>
      <StarsWrapper>{generateStars()}</StarsWrapper>
    </StarsRatingWrapper>
  );
};

export default StarsRating;
