import SearchAlbumToAdd from '../components/SearchAlbumToAdd';
import { createContext } from 'react';
import DashboardContainer from '../components/DashboardContainer';

export const QueryContext = createContext();
const Dashboard = ({ query }) => {
  return (
    <QueryContext.Provider value={query.page}>
      <DashboardContainer />
    </QueryContext.Provider>
  );
};

export default Dashboard;
