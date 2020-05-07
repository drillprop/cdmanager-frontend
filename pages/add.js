import React from 'react';
import PageSpring from '../utils/PageSpring';
import AddProvider from '../contexts/add/AddProvider';
import RecentAlbums from '../components/Add/RecentAlbums';
import AddAlbumForm from '../components/Add/AddAlbumForm';

const AddPage = () => {
  return (
    <AddProvider>
      <PageSpring>
        <AddAlbumForm />
        <RecentAlbums />
      </PageSpring>
    </AddProvider>
  );
};

export default AddPage;
