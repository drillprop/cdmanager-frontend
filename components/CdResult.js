import React, { useState } from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #909090;
  border-radius: 3px;
  img {
    object-fit: cover;
    max-width: 70px;
    max-height: 70px;
  }
`;

const CdResult = ({ artist, title, image }) => {
  const [imageLoaded, setAsLoaded] = useState(false);
  return (
    <Item>
      <ImageWrapper>
        <img
          onLoad={() => setAsLoaded(true)}
          style={imageLoaded ? {} : { display: 'none' }}
          src={image}
          alt={title}
        />
        {!imageLoaded && 'Loading...'}
      </ImageWrapper>
      <div>
        <div>{artist}</div>
        <div>{title}</div>
      </div>
    </Item>
  );
};

export default CdResult;
