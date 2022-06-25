import classes from './Modal.module.css';

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <h3>Description</h3>
      <div className={classes.content}>{props.description}</div>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
  );
}
export default ModalOverlay;
