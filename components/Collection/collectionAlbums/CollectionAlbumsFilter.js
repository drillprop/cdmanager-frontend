import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import { useCollectionContext } from '../../../contexts/collection/CollectionProvider';
import { Input } from '../../../styles/Form';
import { GET_ALBUMS_LENGTH } from '../../../utils/queries';

const CollectionAlbumsFilter = () => {
  const { data } = useQuery(GET_ALBUMS_LENGTH);
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

  return data?.albums?.total ? (
    <Input
      type='search'
      placeholder='filter'
      onChange={(e) => setValue(e.target.value)}
      value={val}
    />
  ) : null;
};

export default CollectionAlbumsFilter;
