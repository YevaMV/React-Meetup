import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import CreateMeetup from './pages/CreateMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />} exact />
        <Route path="/new-meetup" element={<CreateMeetup />} />
      </Routes>
    </div>
  );
}

export default App;
