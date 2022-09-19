import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import CreateMeetup from './pages/CreateMeetup';
import Layout from './components/layout/Layout';
import Favorites from './pages/Favorites';
import Auth from './pages/Auth';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} exact />
        <Route path="/new-meetup" element={<CreateMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Layout>
  );
}

export default App;
