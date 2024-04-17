import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveItem } from '../features/salesSlice';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type Item = {
  //id: number,
  name: string,
  quantity: number,
  price: number,
  expirery: string
}

const SellWineForm = ({ clicked, setClicked }) => {

  const dispatch = useDispatch()

  const [item, setItem] = useState<Item>({
    //id: NaN,
    name: '',
    quantity: 0,
    price: 0,
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
          <Form.Label>Batch Id</Form.Label>
          <Form.Control type="number" placeholder="Batch" name="" value='' disabled />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProduct">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product" name="name" value={item.name}  onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Quantity" name="quantity" value={item.quantity} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProduct">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="date" placeholder="Enter expiry date" name="expirery" value={item.expirery} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" name="price" value={item.price} onChange={handleChange}/>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

      </Row>

    </Form>
  );
}

export default SellWineForm;