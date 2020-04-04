import React from 'react';
import { PageTitle } from '../../styles/Titles';
import CollectionAlbums from './collection/CollectionAlbums';
import Pagination from './collection/Pagination';

const Collection = () => {
  return (
    <>
      <PageTitle>collection</PageTitle>
      <Pagination />
      <CollectionAlbums />
    </>
  );
};

export default Collection;
