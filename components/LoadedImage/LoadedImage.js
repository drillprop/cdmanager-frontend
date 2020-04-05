import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Loading from '../Loading/Loading';

// Shows only loaded image
const LoadedImage = ({ title, image }) => {
  const [imageLoaded, setAsLoaded] = useState(false);
  const props = useSpring({ opacity: imageLoaded ? 1 : 0 });

  return (
    <>
      <animated.img
        onLoad={() => setAsLoaded(true)}
        src={image}
        alt={title}
        style={imageLoaded ? { ...props } : { display: 'none', ...props }}
      />
      {!imageLoaded && <Loading loading={!imageLoaded} isStatic withDelay />}
    </>
  );
};

export default LoadedImage;
