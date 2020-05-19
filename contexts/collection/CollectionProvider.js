import React, { useReducer, useContext } from 'react';
import { collectionReducer } from './collectionReducer';

const initialState = {
  queryVariables: {
    skip: 0,
    search: '',
  },
};

export const CollectionContext = React.createContext({
  ...initialState,
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
