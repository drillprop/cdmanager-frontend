import React from 'react';
import Add from '../components/Add';
import PageSpring from '../utils/PageSpring';
import AddProvider from '../contexts/add/AddProvider';

const AddPage = () => {
  return (
    <AddProvider>
      <PageSpring>
        <Add />
      </PageSpring>
    </AddProvider>
  );
};

export default AddPage;
