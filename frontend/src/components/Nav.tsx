import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGauge, faTable, faUsers, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "../index.css"

const Nav = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='bg-dark min-vh-100'>
                <a className='text-decoration-none text-white d-flex d-none d-sm-inline align-itemcenter'>
                    <span className='ms-1 fs-4'>Wonlate Winery</span>
                </a>
                <hr className='text-secondary'/>
                <ul className='nav nav-pills flex-column'>
                    <li className="nav-item text-white fs-4 my-1">
                        <Link to="/dashboard" className='nav-link text-white fs-5' aria-current="page" >
                            <FontAwesomeIcon icon={ faGauge } />
                            <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item text-white fs-4 my-1">
                        <Link to="/" className='nav-link text-white fs-5' aria-current="page">
                            <FontAwesomeIcon icon={ faHome } />
                            <span className='ms-2 d-none d-sm-inline'>Home</span>
                        </Link>
                    </li>
                    <li className="nav-item text-white fs-4 my-1">
                        <Link to="/sales" className='nav-link text-white fs-5' aria-current="page">
                            <FontAwesomeIcon icon={ faTable } />
                            <span className="ms-2 d-none d-sm-inline">Sales</span>
                        </Link>
                    </li>
                    <li className="nav-item text-white fs-4 my-1">
                        <Link to="/products" className='nav-link text-white fs-5' aria-current="page">
                            <FontAwesomeIcon icon={ faTable } />
                            <span className="ms-2 d-none d-sm-inline">Products</span>
                        </Link>
                    </li>
                    <li className="nav-item text-white fs-4 my-1">
                        <Link to="/expenses" className='nav-link text-white fs-5' aria-current="page">
                            <FontAwesomeIcon icon={ faMoneyBill } />
                            <span className="ms-2 d-none d-sm-inline">Expenses</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav