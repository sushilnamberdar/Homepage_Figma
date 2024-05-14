import React from 'react'
import logo from '../images/logo.png';
import './navbar.css';
import { navbar } from './data/webdata';
export const Navbar = () => {

  return (
    <>
      <div className='navbar'>
        
        <div className='left'>

          <div className='logo'>
            <a href='#'>
              <img src={logo} alt='logo'/>
            </a>
            </div>
            <div className='navbarlink'>
             { navbar.map((item,index) =>{
                return (
                  <>
                  <div><a href='#'>{item}</a></div>
                  </>
              )
            }
              )}
            </div>
        </div>
        <div className='right'>
          <a href='#'>Chat With Us </a>
        </div>
      </div>
    </>
  )
}
