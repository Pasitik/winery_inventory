import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import type { ApiResponse } from '../features/inventory/inventorySlice';
import { useDispatch } from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { deleteItem } from '../features/inventory/inventorySlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal=({item}: {item: ApiResponse})=>{

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  //const {inventory, loading, error} = useSelector((state: RootState) => state.inventory)
  //const items = useSelector((state: RootState) => state.inventory)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (item: ApiResponse) => {
    console.log(item.id)
    dispatch(deleteItem(item))
    handleClose()
  }

  return (
    <>
      <FontAwesomeIcon icon={faTrash} style={{color:"#ED5D3E"}} className='delete' onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {item.name} from your product inventory?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>handleDelete(item)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal