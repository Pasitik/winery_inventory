import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../features/salesSlice';
import { RootState } from '../store';
import Table from 'react-bootstrap/Table';
import {ThunkDispatch} from "@reduxjs/toolkit";
import "../index.css"

function SalesTable() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  //const {inventory, loading, error} = useSelector((state: RootState) => state.inventory)
  const items = useSelector((state: RootState) => state.inventory)

  // Fetch items on component mount
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);


  return (
    <div className='p-table'>
    <Table responsive>
      <thead style={{position: 'sticky', top: 0}}>
        <tr>
          <th className='text-center text-white bg-dark'>ID</th>
          <th className='text-center text-white bg-dark'>WINE</th>
          <th className='text-center text-white bg-dark'>QUANTITY</th>
          <th className='text-center text-white bg-dark'>PRICE</th>
          <th className='text-center text-white bg-dark'>DATE</th>
        </tr>
      </thead>
      <tbody>
          {items.inventory.map(item => (
            item.sales.map(sale => (
              <tr key={sale.id}>
                <td className='text-center'>{sale.id}</td>
                <td className='text-center'>{item.name}</td>
                <td className='text-center'>{sale.quantity}</td>
                <td className='text-center'>{item.price}</td>
                <td className='text-center'>{sale.sale_date}</td>
              
              </tr>
            ))
          ))}
      </tbody>
    </Table>
    </div>
  );
}

export default SalesTable;