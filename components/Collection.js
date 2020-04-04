import React, { useState } from 'react';
import CollectionProvider from '../contexts/collection/CollectionProvider';
import { PageTitle } from '../elements/Titles';
import AlbumsContainer from './AlbumsContainer';
import FilterCollection from './FilterCollection';
import Pagination from './Pagination';

const Collection = () => {
  const [recentAlbumsVisible, showRecentAlbums] = useState(true);
  return (
    <CollectionProvider>
      <PageTitle>collection</PageTitle>
      <Pagination />
      <FilterCollection showRecentAlbums={showRecentAlbums} />
      {recentAlbumsVisible && <AlbumsContainer />}
    </CollectionProvider>
  );
};

export default Collection;
