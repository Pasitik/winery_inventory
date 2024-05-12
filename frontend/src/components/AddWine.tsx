
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddWineForm from './AddWineForm';

const AddWine = () => {
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => setClicked(true);

  useEffect(()=>{
    const closeModal = () => {
      if(clicked){
        setShow(false)
      }
    }
    closeModal()
  },[clicked, setShow])

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Wine
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Wine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddWineForm clicked={clicked} setClicked={setClicked}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddWine;
