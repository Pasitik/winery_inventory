import React from 'react'
import AddWine from '../components/AddWine'
import Upload from '../components/Upload'
import ProductsTable from '../components/ProductsTable'

const Products = () => {
  return (
    <div>
      <div className='d-flex gap-2'>
      <div className='my-5'>
        <AddWine />
      </div>
      <div className='my-5'>
        <Upload />
      </div>
      </div>
      <div className='container'>
        <ProductsTable />
      </div>
    </div>
  )
}

export default Products