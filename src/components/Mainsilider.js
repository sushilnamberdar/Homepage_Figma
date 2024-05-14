import React from 'react'
import './mainsilider.css';
import creator from '../images/Creator.jpg'
import insta from '../images/instagram.svg'
import youtube from '../images/youtube.svg'
import creator1 from '../images/Creator1.jpeg';
import creator2 from '../images/Creator2.jpg';
import creator3 from '../images/1066954080.jpg'

export const Mainsilider = () => {
  return (
    <>
      <div className='Container'>
        <h1>Top Creator</h1>
        <div className='slide'>
          <div className='itm'>
            <img src={creator} ></img>
            <div className='name'>
              <h2>Bunty Namberdar</h2>
              <div className='social-link'>
                <a href='#'>
                  <img src={insta} />
                </a>
                <span>1.2m</span>
                <a href='#'>
                  <img src={youtube} />
                </a>
                <span>1.4m</span>
              </div>
            </div>
          </div>
          <div className='itm'>
            <img src={creator2} ></img>
            <div className='name'>
              <h2>Supriya Singh</h2>
              <div className='social-link'>
                <a href='#'>
                  <img src={insta} />
                </a>
                <span>1.2m</span>
                <a href='#'>
                  <img src={youtube} />
                </a>
                <span>1.4m</span>

              </div>
            </div>
          </div>
          <div className='itm'>
            <img src={creator1} ></img>
            <div className='name'>
              <h2>Manoj Bhatti</h2>
              <div className='social-link'>
                <a href='#'>
                  <img src={insta} />
                </a>
                <span>1.2m</span>
                <a href='#'>
                  <img src={youtube} />
                </a>
                <span>1.4m</span>

              </div>
            </div>
          </div>
          <div className='itm'>
            <img src={creator3} ></img>
            <div className='name'>
              <h2>Aman Dharatrwal</h2>
              <div className='social-link'>
                <a href='#'>
                  <img src={insta} />
                </a>
                <span>1.2m</span>
                <a href='#'>
                  <img src={youtube} />
                </a>
                <span>1.4m</span>

              </div>
            </div>
          </div>
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
