import React, { useState, useContext, useReducer } from 'react';
import FilterCollection from './FilterCollection';
import Pagination from './Pagination';
import Albums from './AlbumsContainer';
import { PageTitle } from '../../elements/Titles';
import { collectionReducer } from './collectionReducer';

const initialState = {
  queryVariables: {
    skip: 8,
    search: '',
    limit: 10
  }
};

export const CollectionContext = React.createContext({});

const CollectionContainer = () => {
  const [state, dispatch] = useReducer(collectionReducer, initialState);
  const [recentAlbumsVisible, showRecentAlbums] = useState(true);
  return (
    <CollectionContext.Provider value={{ state, dispatch }}>
      <PageTitle>collection</PageTitle>
      <Pagination />
      <FilterCollection showRecentAlbums={showRecentAlbums} />
      {recentAlbumsVisible && <Albums />}
    </CollectionContext.Provider>
  );
};

export default CollectionContainer;
