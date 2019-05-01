import React, { useState, useContext, useReducer } from 'react';
import SearchAlbumToAdd from './SearchAlbumToAdd';
import RecentAlbums from './RecentAlbums';
import { addReducer } from './addReducer';

const initialState = {
  searchInput: '',
  isListVisible: false
};

export const AddContext = React.createContext({});

const AddContainer = () => {
  const [state, dispatch] = useReducer(addReducer, initialState);
  const [visible, setToVisible] = useState(true);
  return (
    <>
      <AddContext.Provider value={{ state, dispatch }}>
        <SearchAlbumToAdd setToVisible={setToVisible} />
        {visible && <RecentAlbums />}
      </AddContext.Provider>
    </>
  );
};

export default AddContainer;
