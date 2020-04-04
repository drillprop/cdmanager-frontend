import React from 'react';
import { PageTitle } from '../../styles/Titles';
import AlbumsContainer from './collection/AlbumsContainer';
import Pagination from './collection/Pagination';

const Collection = () => {
  return (
    <>
      <PageTitle>collection</PageTitle>
      <Pagination />
      <AlbumsContainer />
    </>
  );
};

export default Collection;
