import React from 'react';
import Add from '../components/Add';
import PageSpring from '../utils/PageSpring';
import AddContextProvider from '../contexts/add/AddContextProvider';

const AddPage = () => {
  return (
    <AddContextProvider>
      <PageSpring>
        <Add />
      </PageSpring>
    </AddContextProvider>
  );
};

export default AddPage;
