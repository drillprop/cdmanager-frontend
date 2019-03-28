import React, { useState } from 'react';
import SearchAlbumToAdd from './SearchAlbumToAdd';
import RecentAlbums from './RecentAlbums';
import FilterCollection from './FilterCollection';
import Pagination from './Pagination';

const DashboardContainer = () => {
  const [visible, setToVisible] = useState(true);
  return (
    <>
      <SearchAlbumToAdd setToVisible={setToVisible} />
      {visible && (
        <>
          <Pagination />
          <FilterCollection />
          <RecentAlbums />
        </>
      )}
    </>
  );
};

export default DashboardContainer;
