import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../meetup/NewMeetupForm';

function CreateMeetup() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch('https://meetup2-9760b-default-rtdb.firebaseio.com/json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <section>
      <h1>Create Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default CreateMeetup;
