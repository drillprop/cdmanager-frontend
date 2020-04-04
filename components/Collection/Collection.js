import React, { useState } from 'react';
import { PageTitle } from '../../elements/Titles';
import AlbumsContainer from './collection/AlbumsContainer';
import FilterCollection from './collection/FilterCollection';
import Pagination from './collection/Pagination';

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
