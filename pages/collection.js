import Collection from '../components/Collection';
import CollectionProvider from '../contexts/collection/CollectionProvider';
import PageSpring from '../utils/PageSpring';

const CollectionPage = ({ query }) => {
  return (
    <CollectionProvider page={query.page}>
      <PageSpring>
        <Collection />
      </PageSpring>
    </CollectionProvider>
  );
};

export default CollectionPage;
