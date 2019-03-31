import React, { useState, useEffect } from 'react';
import { Input } from '../elements/Form';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import debounce from 'lodash.debounce';

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

const FilterCollection = ({ showRecentAlbums }) => {
  const [result, setValue] = useState('');
  const filter = debounce(text => {
    text ? showRecentAlbums(false) : showRecentAlbums(true);
    !text && setValue('');
    return setValue(text);
  }, 300);

  return (
    <>
      <p>Show results for: {result}</p>
      <Input
        type='text'
        placeholder='filter'
        onChange={e => filter(e.target.value)}
      />
      {result && (
        <Query query={FILTER_ALBUMS} variables={{ search: result }}>
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
