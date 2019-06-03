import React, { useState, useContext, useReducer } from 'react';
import FilterCollection from './FilterCollection';
import Pagination from './Pagination';
import AlbumsContainer from './AlbumsContainer';
import { PageTitle } from '../../elements/Titles';
import { collectionReducer } from './collectionReducer';

export const CollectionContext = React.createContext({});

const CollectionContainer = () => {
  const [state, dispatch] = useReducer(collectionReducer);
  const [recentAlbumsVisible, showRecentAlbums] = useState(true);
  return (
    <CollectionContext.Provider value={{ state, dispatch }}>
      <PageTitle>collection</PageTitle>
      <Pagination />
      <FilterCollection showRecentAlbums={showRecentAlbums} />
      {recentAlbumsVisible && <AlbumsContainer />}
    </CollectionContext.Provider>
  );
};

export default CollectionContainer;
