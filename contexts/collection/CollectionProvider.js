import React, { useReducer, useContext } from 'react';
import { collectionReducer } from './collectionReducer';

const initialState = {
  queryVariables: {
    skip: 0,
    search: '',
    limit: 10,
  },
};
export const CollectionContext = React.createContext({
  ...initialState,
  page: 0,
  dispatch: () => null,
});

const CollectionProvider = ({ children, page = 0 }) => {
  const [state, dispatch] = useReducer(collectionReducer, initialState);
  return (
    <CollectionContext.Provider value={{ state, page, dispatch }}>
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = () => useContext(CollectionContext);

export default CollectionProvider;
