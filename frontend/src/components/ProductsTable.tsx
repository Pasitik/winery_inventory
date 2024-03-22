import Table from 'react-bootstrap/Table';
import stock from '../Inventory'

function ProductsTable() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th className='text-center text-white bg-dark'>BATCH</th>
          <th className='text-center text-white bg-dark'>WINE</th>
          <th className='text-center text-white bg-dark'>QUANTITY</th>
          <th className='text-center text-white bg-dark'>PRICE</th>
          <th className='text-center text-white bg-dark'>EXPIRY</th>
          <th className='text-center text-white bg-dark'>AVAILABLE</th>
        </tr>
      </thead>
      <tbody>
          {stock.inventory.wines.map(item => (
            <tr>
              <td className='text-center'>{item.batch_id}</td>
              <td className='text-center'>{item.name}</td>
              <td className='text-center'>{item.quantity}</td>
              <td className='text-center'>{item.price}</td>
              <td className='text-center'>{item.expiry_date}</td>
              <td className='text-center'>{item.quantity > 0 ?  "Yes" : "No"}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default ProductsTable;