import { createContext } from 'react';
import PageSpring from '../utils/PageSpring';
import Collection from '../components/Collection';

export const QueryContext = createContext();
const CollectionPage = ({ query }) => {
  return (
    <QueryContext.Provider value={query.page}>
      <PageSpring>
        <Collection />
      </PageSpring>
    </QueryContext.Provider>
  );
};

export default CollectionPage;
