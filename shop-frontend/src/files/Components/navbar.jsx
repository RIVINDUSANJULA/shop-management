import React from 'react'
import { Link } from "react-router-dom";

import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

function navbar() {
  return (
    <div>
      <div className='Main'>
        <div className='Logo'>
            <img src={viteLogo} className="logo react" alt="React logo" />
        </div>
        <div className='Sites'>
            <Link to="/">Dashboard</Link>
            <Link to="/upload">New Stock</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/user"><img src={reactLogo} className="logo react" alt="React logo" /></Link>
        </div>
      </div>
    </div>
  )
}

export default navbar
