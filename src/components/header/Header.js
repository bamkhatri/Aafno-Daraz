import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <img className='logo-img' src='/images/logo.png' alt='logo' />
      <div className='header-menu'>
        <a>
          <i className='fas fa-shopping-cart '></i>
          <span>CART</span>
        </a>
        <a>
          <i className='fas fa-user '></i>
          <span>SIGN IN</span>
        </a>
      </div>
    </div>
  )
}

export default Header
