import React, { useState } from 'react';
import SearchAlbumToAdd from './SearchAlbumToAdd';
import RecentAlbums from './RecentAlbums';
import FilterCollection from './FilterCollection';

const DashboardContainer = () => {
  const [visible, setToVisible] = useState(true);
  return (
    <>
      <SearchAlbumToAdd setToVisible={setToVisible} />
      {visible && (
        <>
          <RecentAlbums />
          <FilterCollection />
        </>
      )}
    </>
  );
};

export default DashboardContainer;
