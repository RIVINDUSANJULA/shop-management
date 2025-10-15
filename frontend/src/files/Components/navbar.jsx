import React from 'react'
import '../Components/navbar.css'
import { Link } from "react-router-dom";

import reactLogo from '/react.svg'

function navbar() {
  return (
    <div>
      <div className='Main'>
        <div className='Sites'>
            <links><Link to="/">Home</Link></links>
            <links><Link to="/dashboard">Dashboard</Link></links>
            <links><Link to="/shop">Sell</Link></links>
            <links><Link to="/stock">Stock</Link></links>
            <links><Link to="/upload">New Stock</Link></links>
            <links><Link to="/report">Report</Link></links>
            <links><Link to="/settings"><img src={reactLogo} className="logo react" alt="React logo" /></Link></links>
        </div>
      </div>
    </div>
  )
}

export default navbar
