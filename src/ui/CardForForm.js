import classes from './CardForForm.module.css';

function CardForForm(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default CardForForm;
