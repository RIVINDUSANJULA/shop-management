import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

// import reactLogo from '/react.svg'

function navbar() {
  return (
      <div className='Navbar'>
        <div className='Sites'>
            <Link className='nav-links' to="/">Home</Link>
            <Link className='nav-links' to="/dashboard">Dashboard</Link>
            <Link className='nav-links' to="/shop">Sell</Link>
            <Link className='nav-links' to="/stock">Stock</Link>
            <Link className='nav-links' to="/upload">New Stock</Link>
            <Link className='nav-links' to="/report">Report</Link>
            {/* <Link to="/settings"><img src={reactLogo} className="logo react" alt="React logo" /></Link> */}
        </div>
      </div>
  )
}

export default navbar
