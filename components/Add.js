import React, { useContext } from 'react';
import RecentAlbums from './RecentAlbums';
import SearchAlbumToAdd from './SearchAlbumToAdd';
import { AddContext } from '../contexts/add/AddContextProvider';

const Add = () => {
  const { state } = useContext(AddContext);
  return (
    <>
      <SearchAlbumToAdd />
      {state.isRecentAlbumsVisible && <RecentAlbums />}
    </>
  );
};

export default Add;
