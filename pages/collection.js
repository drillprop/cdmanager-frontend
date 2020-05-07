import CollectionProvider from '../contexts/collection/CollectionProvider';
import PageSpring from '../utils/PageSpring';
import { PageTitle } from '../styles/Titles';
import CollectionAlbums from '../components/Collection/CollectionAlbums';
import Pagination from '../components/Collection/Pagination';

const CollectionPage = ({ query }) => {
  return (
    <CollectionProvider page={query.page}>
      <PageSpring>
        <PageTitle>collection</PageTitle>
        <Pagination />
        <CollectionAlbums />
      </PageSpring>
    </CollectionProvider>
  );
};

export default CollectionPage;
