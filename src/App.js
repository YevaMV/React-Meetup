import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import CreateMeetup from './pages/CreateMeetup';
import Layout from './components/layout/Layout';
import Favorites from './pages/Favorites';
import Auth from './pages/Auth';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} exact />

        {authCtx.isLoggedIn && (
          <Route path="/new-meetup" element={<CreateMeetup />} />
        )}

        {authCtx.isLoggedIn && (
          <Route path="/favorites" element={<Favorites />} />
        )}

        {!authCtx.isLoggedIn && <Route path="/auth" element={<Auth />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
