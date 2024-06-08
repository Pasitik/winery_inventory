import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { saveItem } from '../features/inventory/inventorySlice';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type Item = {
  //id: number,
  name: string,
  quantity: number,
  price: number,
  unit_cost: number,
  expirery: string
}

const AddWineForm = ({ clicked, setClicked }: {clicked:boolean, setClicked: (value: boolean) => void}) => {

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const [item, setItem] = useState<Item>({
    //id: NaN,
    name: '',
    quantity: 0,
    price: 0,
    unit_cost: 0,
    expirery: ''
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setItem({...item, [e.target.name]: e.target.value})
  }

  
  useEffect(() => {
    console.log(item)
    if(clicked){
      dispatch(saveItem(item))
      setClicked(!clicked)
    }
  }, [clicked, setClicked, dispatch, item])

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProduct">
          <Form.Label>Id</Form.Label>
          <Form.Control type="number" placeholder="Enter product id" name="id" value="" disabled />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Unit Purchase Price</Form.Label>
          <Form.Control type="number" placeholder="Unit Purchase Price" name="unit_cost" value={item.unit_cost} onChange={handleChange} required/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProduct">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product" name="name" value={item.name}  onChange={handleChange} required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Quantity" name="quantity" value={item.quantity} onChange={handleChange} required/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProduct">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="date" placeholder="Enter expiry date" name="expirery" value={item.expirery} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" name="price" value={item.price} onChange={handleChange} required/>
        </Form.Group>
      </Row>

    </Form>
  );
}

export default AddWineForm;