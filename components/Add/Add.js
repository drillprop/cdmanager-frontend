import React from 'react';
import { useAddContext } from '../../contexts/add/AddProvider';
import RecentAlbums from './add/RecentAlbums';
import SearchAlbumForm from './add/SearchAlbumForm';

const Add = () => {
  const { state } = useAddContext();
  return (
    <>
      <SearchAlbumForm />
      {state.isRecentAlbumsVisible && <RecentAlbums />}
    </>
  );
};

export default Add;
