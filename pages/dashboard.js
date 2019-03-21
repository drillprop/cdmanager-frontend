import AddAlbum from '../components/AddAlbum';
import { createContext } from 'react';

export const QueryContext = createContext();
const Dashboard = ({ query }) => {
  return (
    <QueryContext.Provider value={query.page}>
      <AddAlbum />
    </QueryContext.Provider>
  );
};

export default Dashboard;
