import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const Stars = ({
  height = '40px',
  fillColor = 'black',
  blankColor = 'white',
  rating = 100,
  id = 'path',
  setRating,
}) => {
  const [cover, setCover] = useState(0);

  useEffect(() => {
    setCover(rating);
  }, [rating]);

  const handleMouseMove = (e) => {
    const { width, x } = e.currentTarget.getBoundingClientRect();
    const relativePos = e.clientX - x;

    const roundedPos = Math.round((relativePos / width) * 10) * 10;
    setCover(roundedPos);
  };

  return (
    <svg
      viewBox='0 0 100 20'
      height={height}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCover(rating)}
      onClick={() => setRating && setRating(cover)}
    >
      <defs>
        <linearGradient id={id + cover}>
          <stop offset={`${cover}%`} stopColor={fillColor} />
          <stop offset={`${cover}%`} stopColor={blankColor} stopOpacity='1' />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id + cover})`}
        d='m 90.090956,0.5219413 3.120605,6.3219131 6.977429,1.014226 -5.049015,4.9213426 1.19165,6.949241 -6.240669,-3.281448 -6.24067,3.281448 1.191651,-6.949241 -5.049019,-4.9213426 6.977432,-1.014226 z m -20.004721,6e-8 3.120609,6.32191304 6.977429,1.014226 -5.049019,4.9213426 1.191646,6.949241 -6.240665,-3.281448 -6.240669,3.281448 1.19165,-6.949241 -5.049019,-4.9213426 6.977429,-1.014226 z m -20.13508,6e-8 3.120611,6.32191298 6.977428,1.014226 -5.049019,4.9213426 1.191647,6.949241 -6.240667,-3.281448 -6.240666,3.281448 1.191647,-6.949241 -5.049019,-4.9213426 6.977428,-1.014226 z m -19.917786,6e-8 3.120609,6.32191292 6.977431,1.014226 -5.049021,4.9213426 1.191647,6.949241 -6.240666,-3.281448 -6.240665,3.281448 1.191646,-6.949241 -5.049019,-4.9213426 6.977428,-1.014226 z m -20.1021922,6e-8 3.1206102,6.32191296 6.977429,1.0142256 -5.04902,4.9213429 1.191647,6.949241 L 9.9311768,16.447216 3.6905123,19.728664 4.8821581,12.779423 -0.16686101,7.8580801 6.8105676,6.8438545 Z'
      />
    </svg>
  );
};

Stars.propTypes = {
  height: PropTypes.string,
  fillColor: PropTypes.string,
  blankColor: PropTypes.string,
  rating: PropTypes.number,
  setRating: PropTypes.func,
};

export default Stars;
