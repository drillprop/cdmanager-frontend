import React from 'react';
import { useAddContext } from '../contexts/add/AddContextProvider';
import RecentAlbums from './RecentAlbums';
import SearchAlbumToAdd from './SearchAlbumToAdd';

const Add = () => {
  const { state } = useAddContext();
  return (
    <>
      <SearchAlbumToAdd />
      {state.isRecentAlbumsVisible && <RecentAlbums />}
    </>
  );
};

export default Add;
