import { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../features/salesSlice';
import { RootState } from '../store';
import { setRefresh } from '../features/refreshSlice';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { ThunkDispatch } from "@reduxjs/toolkit";
import "../index.css";

interface Sale {
  id: number;
  product_id: number;
  quantity: number;
  price: number;
  sale_date: string;
}

function SalesTable() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const items = useSelector((state: RootState) => state.inventory);
  const refresh = useSelector((state: RootState) => state.refresh.value);
  
  const [showTodaySales, setShowTodaySales] = useState(false);

  // Fetch items on component mount
  useEffect(() => {
    dispatch(fetchItems());

    return () => {
      dispatch(setRefresh(false));
    };
  }, [dispatch, refresh]);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className='p-table'>
      <div>
        <Col className='mb-3 ml-2'>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show today's sales"
            checked={showTodaySales}
            onChange={(e) => setShowTodaySales(e.target.checked)}
          />
        </Col>
      </div>
      <Table responsive>
        <thead style={{ position: 'sticky', top: 0 }}>
          <tr>
            <th className='text-center text-white bg-dark'>ITEM</th>
            <th className='text-center text-white bg-dark'>QUANTITY</th>
            <th className='text-center text-white bg-dark'>PRICE</th>
            <th className='text-center text-white bg-dark'>DATE</th>
          </tr>
        </thead>
        <tbody className='t-body'>
          {items.inventory.map(item => {
            const filteredSales = showTodaySales 
              ? item.sales.filter(sale => sale.sale_date.split('T')[0] === today)
              : item.sales;
            return (
              <Fragment key={item.name}>
                {filteredSales.map(sale => (
                  <tr key={sale.id}>
                    <td className='text-center'>{item.name}</td>
                    <td className='text-center'>{sale.quantity}</td>
                    <td className='text-center'>{sale.price}</td>
                    <td className='text-center'>{sale.sale_date}</td>
                  </tr>
                ))}
              </Fragment>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default SalesTable;
