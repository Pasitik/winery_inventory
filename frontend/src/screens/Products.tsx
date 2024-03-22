import React from 'react'
import AddWine from '../components/AddWine'
import ProductsTable from '../components/ProductsTable'

const Products = () => {
  return (
    <div>
      <div className='my-5'>
        <AddWine />
      </div>
      <div className='container'>
        <ProductsTable />
      </div>
    </div>
  )
}

export default Products