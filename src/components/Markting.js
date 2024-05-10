import React from 'react';
import './markting.css';
import img1 from '../images/1066954080.jpg';
import img2 from '../images/1099309872.jpg';
import img3 from '../images/214392961.jpg';
import img4 from '../images/39819212.jpg';
import img5 from '../images/581404187.jpg';
import img6 from '../images/662883239.jpg';

export const Markting = () => {
  return (
    <>
      <div className='markting'>

        <div className='leftside'>
          <h1>Friction-Less <br></br>
            Influencer<br></br>
            Marketing
          </h1>
          <br />
          <div className='userbnaner'> 3M Users</div>
          <div className='thebiggest'>
            <span >The Biggest Programme For Influencers! Discover Thousands Of Influencers Across Niches And Classes
            </span>
          </div>
          <div className='leftsidelast'>
            <a href='#'>
              Get A Free Consultant
            </a>
          </div>
        </div>
        <div className='right-side-slide'>
          <div className='imag-1st'>
            <img src={img1}></img>
          </div>
          <div className='img-2nd'>
            {/* <img src={img2}></img> */}
          </div>
          <div className='img-3rd'>
            {/* <img src={img3}></img> */}
          </div>
          <div className='img-4th'>
            {/* <img src={img4}></img> */}
          </div>
          <div className='img-5th'>
            {/* <img src={img5}></img> */}
          </div>
          <div className='img-6th'>
            {/* <img src={img6}></img> */}
          </div>
        </div>
      </div>
    </>
  )
}
