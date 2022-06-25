import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../ui/Backdrop';
import ModalOverlay from '../ui/ModalOverlay';

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay description={props.description} onClose={props.onClose}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
