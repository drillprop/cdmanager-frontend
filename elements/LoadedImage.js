import React, { useState } from 'react';

// Shows only loaded image
const LoadedImage = ({ title, image }) => {
  const [imageLoaded, setAsLoaded] = useState(false);
  return (
    <>
      <img
        onLoad={() => setAsLoaded(true)}
        src={image}
        alt={title}
        style={imageLoaded ? {} : { display: 'none' }}
      />
      {!imageLoaded && 'Loading...'}
    </>
  );
};

export default LoadedImage;
