import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import CreateMeetup from './pages/CreateMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} exact />
        <Route path="/new-meetup" element={<CreateMeetup />} />
      </Routes>
    </Layout>
  );
}

export default App;
