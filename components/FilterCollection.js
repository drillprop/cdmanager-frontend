import React, { useState } from 'react';
import { Input } from '../elements/Form';

const FilterCollection = () => {
  const [value, setValue] = useState('');
  const filter = e => {
    const value = e.currentTarget.value;
    setValue(value);
  };
  return (
    <>
      <p>Show results for: {value}</p>
      <Input type='text' placeholder='filter' onChange={filter} />{' '}
    </>
  );
};

export default FilterCollection;
