import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type Item = {
  id: number,
  batch_id: string,
  name: string,
  quantity: number,
  price: number,
  expiry_date: string
}

const AddWineForm = () => {
  const [item, setItem] = useState<Item>({
    id: NaN,
    batch_id: '',
    name: '',
    quantity: 0,
    price: 0,
    expiry_date: ''
  })

  const handleIdChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(item => ({...item, id: Number(e.target.value) || NaN})) 
  }
  const handleBatchIdChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(item => ({...item, batch_id: e.target.value }))
  }
  const handleNameChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(item => ({...item, name: e.target.value}))
  }
  const handleQuantityChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(item => ({...item, quantity: Number(e.target.value)}))
  }
  const handlePriceChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(item =>({...item, price: Number(e.target.value)}))
  }
  const handleExpiryChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(item => ({...item, expiry_date: e.target.value}))
  }

  useEffect(() => {
    console.log(item)
  }, [item])

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProduct">
          <Form.Label>Id</Form.Label>
          <Form.Control type="number" placeholder="Enter product id" value={item.id} onChange={handleIdChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Batch Id</Form.Label>
          <Form.Control type="number" placeholder="Batch" value={item.batch_id} onChange={handleBatchIdChange}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProduct">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product" value={item.name}  onChange={handleNameChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Quantity" value={item.quantity} onChange={handleQuantityChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridProduct">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="date" placeholder="Enter expiry date" value={item.expiry_date} onChange={handleExpiryChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridQuantity">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price"  value={item.price} onChange={handlePriceChange}/>
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

export default AddWineForm;