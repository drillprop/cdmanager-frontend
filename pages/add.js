import React from 'react';
import PageSpring from '../utils/PageSpring';
import AddProvider from '../contexts/add/AddProvider';
import RecentAlbums from '../components/Add/RecentAlbums';
import SearchAlbumForm from '../components/Add/SearchAlbumForm';

const AddPage = () => {
  return (
    <AddProvider>
      <PageSpring>
        <SearchAlbumForm />
        <RecentAlbums />
      </PageSpring>
    </AddProvider>
  );
};

export default AddPage;
