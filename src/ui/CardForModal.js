import Modal from '../components/Modal';

function CardForModal(props) {
  return <Modal description={props.description} onClose={props.onClose} />;
}

export default CardForModal;
