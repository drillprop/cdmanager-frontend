import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import { useCollectionContext } from '../../../../contexts/collection/CollectionProvider';
import { Input } from '../../../../styles/Form';
import { GET_ALBUMS_LENGTH } from '../../../../utils/queries';
import { Query } from 'react-apollo';

const CollectionAlbumsFilter = () => {
  const { dispatch } = useCollectionContext();
  const [val, setValue] = useState('');

  useEffect(() => {
    if (val) {
      debouncedFilter(val);
    } else {
      dispatch({
        type: 'CHANGE_QUERY_VARIABLES',
        search: '',
      });
    }
    return () => debouncedFilter.cancel();
  }, [val]);

  const debouncedFilter = debounce((text) => {
    text = text.trim();
    dispatch({
      type: 'CHANGE_QUERY_VARIABLES',
      search: text,
    });
  }, 300);

  return (
    <Query query={GET_ALBUMS_LENGTH}>
      {({ data }) => {
        return data?.albums?.total ? (
          <Input
            type='search'
            placeholder='filter'
            onChange={(e) => setValue(e.target.value)}
            value={val}
          />
        ) : null;
      }}
    </Query>
  );
};

export default CollectionAlbumsFilter;
