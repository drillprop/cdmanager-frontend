import { createContext } from 'react';
import CollectionContainer from '../components/CollectionContainer';
import PageSpring from '../utils/PageSpring';

export const QueryContext = createContext();
const Collection = ({ query }) => {
  return (
    <QueryContext.Provider value={query.page}>
      <PageSpring>
        <CollectionContainer />
      </PageSpring>
    </QueryContext.Provider>
  );
};

export default Collection;
