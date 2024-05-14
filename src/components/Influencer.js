import React from 'react';
import './Influencer.css'
import { Influencermarkting } from './data/webdata';

export const Influencer = () => {
  return (
    <>
      <div className='heading1'>Influencer Marketing</div>
      <div className='inmarketing'>

        {
          Influencermarkting.map((item, index) => {
            return (
              <>

                <div className='box'>{item.title}
                  <p>
                    {item.dis}
                  </p>
                </div>
              </>
            )

          }
          )
        }
      </div>
    </>
  )
}
