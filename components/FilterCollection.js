import React, { useState } from 'react';
import { Input } from '../elements/Form';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const FILTER_ALBUMS = gql`
  query FILTER_ALBUMS($search: String!) {
    albumsCollection(search: $search) {
      title
      artist
      image
      id
    }
  }
`;

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
      {value && (
        <Query query={FILTER_ALBUMS} variables={{ search: value }}>
          {({ data, error, loading }) => {
            if (error) return <p>{error.message}</p>;
            if (loading) return <p>Loading...</p>;
            if (data) {
              console.log(data);
              return null;
            }
          }}
        </Query>
      )}
    </>
  );
};

export default FilterCollection;
