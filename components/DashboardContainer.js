import React, { useState } from 'react';
import SearchAlbumToAdd from './SearchAlbumToAdd';
import RecentAlbums from './RecentAlbums';
import FilterCollection from './FilterCollection';
import Pagination from './Pagination';

const DashboardContainer = () => {
  const [visible, setToVisible] = useState(true);
  const [recentAlbumsVisible, showRecentAlbums] = useState(true);
  return (
    <>
      <SearchAlbumToAdd setToVisible={setToVisible} />
      {visible && (
        <>
          <Pagination />
          <FilterCollection showRecentAlbums={showRecentAlbums} />
          {recentAlbumsVisible && <RecentAlbums />}
        </>
      )}
    </>
  );
};

export default DashboardContainer;
