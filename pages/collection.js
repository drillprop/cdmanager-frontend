import { createContext } from 'react';
import CollectionContainer from '../components/Collection/CollectionContainer';
import PageTransition from '../utils/PageTransition';

export const QueryContext = createContext();
const Collection = ({ query }) => {
  return (
    <QueryContext.Provider value={query.page}>
      <PageTransition>
        <CollectionContainer />
      </PageTransition>
    </QueryContext.Provider>
  );
};

export default Collection;
