import React from 'react';

const AlbumInfo = ({ artist, title }) => {
  return (
    <div>
      <div>{artist}</div>
      <div>{title}</div>
    </div>
  );
};

export default AlbumInfo;
