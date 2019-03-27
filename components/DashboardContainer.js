import React, { useState } from 'react';
import SearchAlbumToAdd from './SearchAlbumToAdd';
import RecentAlbums from './RecentAlbums';
import FilterCollection from './FilterCollection';

const DashboardContainer = () => {
  return (
    <>
      <SearchAlbumToAdd />
      <RecentAlbums />
      <FilterCollection />
    </>
  );
};

export default DashboardContainer;
