import React, { useState } from 'react';
import { useCollectionContext } from '../../../../contexts/collection/CollectionProvider';
import debounce from 'lodash.debounce';
import { Input } from '../../../../styles/Form';
import { Query } from 'react-apollo';
import { GET_ALBUMS_LENGTH } from '../../../../utils/queries';

const CollectionAlbumsFilter = () => {
  const { dispatch } = useCollectionContext();
  const [val, setValue] = useState('');

  const filter = debounce((text) => {
    text = text.trim();
    dispatch({
      type: 'CHANGE_QUERY_VARIABLES',
      search: text,
    });
    !text && setValue('');
    return setValue(text);
  }, 300);
  return (
    <Query query={GET_ALBUMS_LENGTH} fetchPolicy='cache-and-network'>
      {({ data, loading, error }) => {
        if (error) return null;
        if (!data?.albums?.total) return null;
        return (
          <Input
            type='text'
            placeholder='filter'
            onChange={(e) => filter(e.target.value)}
          />
        );
      }}
    </Query>
  );
};

export default CollectionAlbumsFilter;
