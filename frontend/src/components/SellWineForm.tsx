import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { saveItem } from '../features/salesSlice';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type Item = {
  product_id: number,
  quantity: number
}

const SellWineForm = ({ clicked, setClicked }: {clicked:boolean, setClicked: (value: boolean) => void}) => {

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const [item, setItem] = useState<Item>({
    product_id: NaN,
    quantity: 0
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
          <Form.Label>Product Id</Form.Label>
          <Form.Control type="number" placeholder="Enter product id" name="product_id" value={Number(item.product_id)} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Quantity" name="quantity" value={item.quantity} onChange={handleChange}/>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default SellWineForm;