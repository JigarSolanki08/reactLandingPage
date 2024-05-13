import React from 'react'
import './Navb.css';

const Navb = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          </ul>
          <div className='btn1'>
            <button>Login</button>
          </div>
      </nav>
    </>
  )
}

export default Navb