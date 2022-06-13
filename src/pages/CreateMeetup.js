import NewMeetupForm from '../meetup/NewMeetupForm';

function CreateMeetup() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-meetup-d871b-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  return (
    <section>
      <h1>Create Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default CreateMeetup;
