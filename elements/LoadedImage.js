import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Loading from './Loading';
// Shows only loaded image
const LoadedImage = ({ title, image }) => {
  const [imageLoaded, setAsLoaded] = useState(false);
  const props = useSpring({ opacity: imageLoaded ? 1 : 0 });

  return (
    <>
      <animated.div style={props}>
        <>
          <img
            onLoad={() => setAsLoaded(true)}
            src={image}
            alt={title}
            style={imageLoaded ? { ...props } : { display: 'none', ...props }}
          />
        </>
      </animated.div>
      {!imageLoaded && <Loading loading={!imageLoaded} />}
    </>
  );
};

export default LoadedImage;
