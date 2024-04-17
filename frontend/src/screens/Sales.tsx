import React from 'react'
import SellWine from '../components/SellWine'
import SalesTable from '../components/SalesTable'

const Sales = () => {
  return (
    <div>
      <div className='my-5'>
        <SellWine />
      </div>
      <div className='container'>
        <SalesTable />
      </div>
    </div>
  )
}

export default Sales