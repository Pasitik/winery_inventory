import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { fetchItems } from '../features/inventory/inventorySlice';
import DeleteModal from './DeleteModal'
import { RootState } from '../store';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "../index.css"

function ProductsTable() {
  const [search, setSearch] = useState<string>('')
  console.log(search)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  //const {inventory, loading, error} = useSelector((state: RootState) => state.inventory)
  const items = useSelector((state: RootState) => state.inventory)

  // Fetch items on component mount
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className='p-table'>
    <div>
        <Col className='mb-3'>
          <Form.Control type="text" placeholder="Search"
            onChange={(e)=>setSearch(e.target.value)}/>
        </Col>
    </div>
    <Table responsive>
      <thead style={{position: 'sticky', top: 0}}>
        <tr>
          <th className='text-center text-white bg-dark'>BAT</th>
          <th className='text-center text-white bg-dark'>WINE</th>
          <th className='text-center text-white bg-dark'>QUANTITY</th>
          <th className='text-center text-white bg-dark'>PRICE</th>
          <th className='text-center text-white bg-dark'>EXPIRY</th>
          <th className='text-center text-white bg-dark'>AVAILABLE</th>
          <th className='text-center text-white bg-dark'>Delete</th>
        </tr>
      </thead>
      <tbody>
          {items.inventory.filter((item)=>{
            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
          }).map(item => (
            <tr key={item.id}>
              <td className='text-center'>{item.id}</td>
              <td className='text-center'>{item.name}</td>
              <td className='text-center'>{item.quantity}</td>
              <td className='text-center'>{item.price}</td>
              <td className='text-center'>{item.expirery}</td>
              <td className='text-center'>{item.quantity > 0 ?  "Yes" : "No"}</td>
              <td className='text-center'>
                <DeleteModal item={item}/>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
    </div>
  );
}

export default ProductsTable;