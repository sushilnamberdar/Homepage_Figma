import React from 'react'
import './companys.css';
import { logo } from './data/webdata';

export const Companys = () => {
  return (
    <>

      <div className='com'>
        <div className='heading'>
          <div className='mainheading'>Leading Brands</div>
        </div>
        <div className='logos'>
        {
          logo.map((item,index) => {
            return(
              <>
              <div className='image'>
                  <img src={item}/>
              </div>
              </>
            )
          }
        )
        }
        </div>
      </div>
    </>
  )
}
