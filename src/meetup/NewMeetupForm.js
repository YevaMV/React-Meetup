import CardForForm from '../ui/CardForForm';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
  return (
    <CardForForm>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </CardForForm>
  );
}

export default NewMeetupForm;
