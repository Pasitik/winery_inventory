import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import type { ApiResponse } from '../features/inventory/inventorySlice';
import { useDispatch } from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { editItem } from '../features/inventory/inventorySlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const EditProduct=({item}: {item: ApiResponse})=>{

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  //const {inventory, loading, error} = useSelector((state: RootState) => state.inventory)
  //const items = useSelector((state: RootState) => state.inventory)

  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const [newPrice, setNewPrice] = useState(0);


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


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewPrice(Number(e.target.value))
  }

  const handleEdit = () => {
    const updatedItem = { ...item, price: newPrice };
    dispatch(editItem(updatedItem))
  }


  // const handleEdit = (item: ApiResponse) => {
    // console.log(item.price)
    // dispatch(editItem(item))
  // }

  return (
    <>
    <FontAwesomeIcon icon={faEdit} style={{color:"#228B22"}} className='delete' onClick={handleShow}/>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridQuantity">
              <Form.Label>Unit Price</Form.Label>
              <Form.Control type="number" placeholder="Update Price" name="unit_price" value={newPrice} onChange={handleChange} required/>
            </Form.Group>
          </Row>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default EditProduct