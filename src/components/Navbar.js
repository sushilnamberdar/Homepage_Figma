import React from 'react'
import logo from '../images/logo.png';
import './navbar.css';
export const Navbar = () => {

  return (
    <>
      <div className='navbar'>
        
        <div className='left'>

          <div className='logo'>
            <a href='#'>
              <img src={logo} alt='logo' />
            </a>
            </div>
            <div className='navbarlink'>
              <div><a href='#'>I'm A Creator</a></div>
              <div><a href='#'>Top Influencer</a></div>
              <div><a href='#'>About Us </a></div>
              <div><a href='#'>Contact Us</a></div>
            </div>
        </div>
        <div className='right'>
          <a href='#'>Chat With Us </a>
        </div>
      </div>
    </>
  )
}
