import React, { useReducer, useContext } from 'react';
import { addReducer } from './addReducer';

const initialState = {
  searchInput: '',
  isListVisible: false,
  isRecentAlbumsVisible: true,
  clearInput: true
};

export const AddContext = React.createContext({
  ...initialState,
  dispatch: () => null
});

const AddContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addReducer, initialState);
  return (
    <>
      <AddContext.Provider value={{ state, dispatch }}>
        {children}
      </AddContext.Provider>
    </>
  );
};

export const useAddContext = () => useContext(AddContext);

export default AddContextProvider;
