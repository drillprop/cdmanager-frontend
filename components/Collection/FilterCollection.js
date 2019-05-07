import debounce from 'lodash.debounce';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { Input } from '../../elements/Form';
import { GET_ALBUMS_FROM_COLLECTION } from '../../utils/queries';
import Albums from '../../elements/Albums';

const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  input {
    display: block;
    margin: 0 auto;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
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
                return (
                  <>
                    <StyledH2>Searching for: {result}</StyledH2>{' '}
                    <Albums albums={data.albums} deleteButton={true} />;
                  </>
                );
              }
            }}
          </Query>
        )}
      </Container>
    </>
  );
};

export default FilterCollection;
