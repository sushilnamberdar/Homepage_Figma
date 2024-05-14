import React from 'react'
import './smarttools.css';
import { smarttdata } from './data/webdata';
export const Smartools = () => {
  return (
    <>
      <div className='smarttools'>
        <h1>Smart Tools</h1>
        <div className='box-container'>

        {smarttdata.map((item,index)=>{
         return(
          <>
          <div className='box-items'>
          <div className='items'>
              <img src={item.img}></img>
              <p>{item.title}</p>
              <div className='p'>
                <span>{item.title2}</span>
              </div>
              <div className='link'>
                <a href='#'>
                  Get Started &#x2192;
                </a>
              </div>
            </div>
            </div>
          </>
         )})}
        </div>
      </div>
    </>
  )
}
