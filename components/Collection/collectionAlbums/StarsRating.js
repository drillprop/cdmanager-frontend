import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import styled from 'styled-components';
import { robo } from '../../../utils/fonts';
import { RATE_ALBUM } from '../../../utils/mutations';
import { GET_ALBUMS_FROM_COLLECTION } from '../../../utils/queries';
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

const StarsRating = ({ rateAvg, yourRate, id, variables }) => {
  const [rateAlbum] = useMutation(RATE_ALBUM, {
    refetchQueries: [
      {
        query: GET_ALBUMS_FROM_COLLECTION,
        variables,
      },
    ],
  });
  const [newRating, setNewRating] = useState(0);

  const handleRate = (value) => {
    setNewRating(value);
    rateAlbum({ variables: { id, value: value / 10 } });
  };

  return (
    <StarsWrapper>
      <span>your rating</span>
      <Stars
        fillColor='#333'
        blankColor='silver'
        height='26px'
        rating={newRating || yourRate * 10}
        setRating={handleRate}
        id={'your-rating' + id}
      />
      <span>users rating</span>
      <Stars
        disableMouseEvents
        fillColor='#575757'
        blankColor='silver'
        height='18px'
        rating={rateAvg * 10}
        id={'users-rating' + id}
      />
    </StarsWrapper>
  );
};

StarsRating.propTypes = {
  id: PropTypes.string,
  variables: PropTypes.shape({
    skip: PropTypes.number,
    search: PropTypes.string,
    limit: PropTypes.number,
  }),
  rateAvg: PropTypes.number,
  yourRate: PropTypes.number,
};

export default StarsRating;
