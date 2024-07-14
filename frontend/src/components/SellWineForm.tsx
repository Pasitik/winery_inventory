import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../features/salesSlice';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { RootState } from '../store';
import { saveItem } from '../features/salesSlice';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type Item = {
  product_id: number,
  quantity: number,
  price: number
}

const SellWineForm = ({ clicked, setClicked }: {clicked:boolean, setClicked: (value: boolean) => void}) => {

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const product = useSelector((state: RootState) => state.inventory)


  const [item, setItem] = useState<Item>({
    product_id: NaN,
    quantity: 0,
    price: 0
  })

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setItem({...item, [e.target.name]: e.target.value})  
  }
  let _id = Number(item.product_id)
  console.log(_id)
  const filteredProducts = product.inventory.filter((prod) => prod.id === _id);
  const _price:number = filteredProducts.length > 0 ? filteredProducts[0].price : 0; // Set a default value if no matching product is found
  console.log(_price)
  
  useEffect(() => {
    console.log(item)
    if(clicked){
      setItem((prevItem) => ({...prevItem, price:_price}))
      dispatch(saveItem({ ...item, price:_price}));
      setClicked(!clicked)
    }
  }, [clicked, setClicked, item])


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