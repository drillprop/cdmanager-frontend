import debounce from 'lodash.debounce';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { Input } from '../../elements/Form';
import { GET_ALBUMS_FROM_COLLECTION } from '../../utils/queries';

const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
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
      <Container>
        <p>Show results for: {result}</p>
        <Input
          type='text'
          placeholder='filter'
          onChange={e => filter(e.target.value)}
        />
        {result && (
          <Query
            query={GET_ALBUMS_FROM_COLLECTION}
            variables={{ search: result }}
          >
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
      </Container>
    </>
  );
};

export default FilterCollection;
