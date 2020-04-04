import React, { useState } from 'react';
import { PageTitle } from '../elements/Titles';
import AlbumsContainer from './AlbumsContainer';
import FilterCollection from './FilterCollection';
import Pagination from './Pagination';

const Collection = () => {
  const [recentAlbumsVisible, showRecentAlbums] = useState(true);
  return (
    <>
      <PageTitle>collection</PageTitle>
      <Pagination />
      <FilterCollection showRecentAlbums={showRecentAlbums} />
      {recentAlbumsVisible && <AlbumsContainer />}
    </>
  );
};

export default Collection;
