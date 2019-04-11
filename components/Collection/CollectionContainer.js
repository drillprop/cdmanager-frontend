import React, { useState } from 'react';
import FilterCollection from './FilterCollection';
import Pagination from './Pagination';
import Albums from './Albums';
import { PageTitle } from '../../elements/Titles';

const CollectionContainer = () => {
  const [recentAlbumsVisible, showRecentAlbums] = useState(true);
  return (
    <>
      <PageTitle>collection</PageTitle>
      <Pagination />
      <FilterCollection showRecentAlbums={showRecentAlbums} />
      {recentAlbumsVisible && <Albums />}
    </>
  );
};

export default CollectionContainer;
