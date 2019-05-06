import React, { useReducer } from 'react';
import SearchAlbumToAdd from './SearchAlbumToAdd';
import RecentAlbums from './RecentAlbums';
import { addReducer } from './addReducer';

const initialState = {
  searchInput: '',
  isListVisible: false,
  isRecentAlbumsVisible: true,
  clearInput: true
};

export const AddContext = React.createContext({});

const AddContainer = () => {
  const [state, dispatch] = useReducer(addReducer, initialState);
  const { isRecentAlbumsVisible } = state;
  return (
    <>
      <AddContext.Provider value={{ state, dispatch }}>
        <SearchAlbumToAdd />
        {isRecentAlbumsVisible && <RecentAlbums />}
      </AddContext.Provider>
    </>
  );
};

export default AddContainer;
