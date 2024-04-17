import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../features/salesSlice';
import { RootState } from '../store';
import Table from 'react-bootstrap/Table';
import stock from '../Inventory'
import "../index.css"

function SalesTable() {
  const dispatch = useDispatch();
  //const {inventory, loading, error} = useSelector((state: RootState) => state.inventory)
  const items = useSelector((state: RootState) => state.sales)

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
          {items.sales.map(item => (
            <tr>
              <td className='text-center'>{item.id}</td>
              <td className='text-center'>{item.name}</td>
              <td className='text-center'>{item.quantity}</td>
              <td className='text-center'>{item.price}</td>
              <td className='text-center'>{item.sale_date}</td>
             
            </tr>
          ))}
      </tbody>
    </Table>
    </div>
  );
}

export default SalesTable;