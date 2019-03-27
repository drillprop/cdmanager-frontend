import SearchAlbumToAdd from '../components/SearchAlbumToAdd';
import { createContext } from 'react';

export const QueryContext = createContext();
const Dashboard = ({ query }) => {
  return (
    <QueryContext.Provider value={query.page}>
      <SearchAlbumToAdd />
    </QueryContext.Provider>
  );
};

export default Dashboard;
