import React from 'react'
import './mainsilider.css';
import { mainsiliderdata } from './data/webdata';
export const Mainsilider = () => {
  return (
    <>
      <div className='Container'>
        <h1>Top Creator</h1>
        <div className='slide'>
          {
            mainsiliderdata.map((item, index) => {

              return (
                <>
                  <div className='itm'>
                    <img src={item.img} ></img>
                    <div className='name'>
                      <h2>{item.name}</h2>
                      <div className='social-link'>
                        <a href='#'>
                          <img src={item.insatimg} />
                        </a>
                        <span>{item.instafllower}</span>
                        <a href='#'>
                          <img src={item.youtubeimg} />
                        </a>
                        <span>{item.youtubesub}</span>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
        </div>
        <div className='slide-bottom'>
          <div className='bottom-slide'>
            <h1>
              Get In Touch
            </h1>
            <p>Schedule A Free Consultation To Underrstand How The Wingup Media Can Help You  </p>
            <a href='#'>Chat With Us</a>
          </div>
        </div>
      </div>
    </>
  )
}
