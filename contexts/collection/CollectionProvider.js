import React, { useReducer, useContext } from 'react';
import { collectionReducer } from './collectionReducer';

const initialState = {
  queryVariables: {
    skip: 8,
    search: '',
    limit: 10
  }
};
export const CollectionContext = React.createContext({
  ...initialState,
  dispatch: () => null
});

const CollectionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(collectionReducer, initialState);
  return (
    <CollectionContext.Provider value={{ state, dispatch }}>
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollectionContext = () => useContext(CollectionContext);

export default CollectionProvider;
