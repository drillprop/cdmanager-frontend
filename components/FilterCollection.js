import React, { useState } from 'react';

const FilterCollection = () => {
  const [value, setValue] = useState('');
  const filter = e => {
    const value = e.currentTarget.value;
    setValue(value);
  };
  return <input type='text' placeholder='filter' onChange={filter} />;
};

export default FilterCollection;
