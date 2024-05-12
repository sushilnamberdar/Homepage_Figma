import React from 'react'
import './smarttools.css';
import svg1 from '../images/smarttools/Smart.svg'
import svg2 from '../images/smarttools/Smart1.svg'
import svg3 from '../images/smarttools/Smart2.svg'
import svg4 from '../images/smarttools/Smart4.svg'
import svg5 from '../images/smarttools/Smart5.svg'

export const Smartools = () => {
  return (
    <>
      <div className='smarttools'>
        <h1>Smart Tools</h1>
        <div className='box-container'>
          <div className='box-items'>
            <div className='items'>
              <img src={svg1}></img>
              <p>Creator Insights</p>
              <div className='p'>
                <span>Get Insigts Of Any Influencer Profile Inside Seconds Straight From Your Browswer</span>
              </div>
              <div className='link'>
                <a href='#'>
                  Get Started &#x2192;
                  </a>
              </div>
            </div>
          </div>
          <div className='box-items'>
          <div className='items'>
              <img src={svg2}></img>
              <p>Campaign Executive</p>
              <div className='p'>
                <span>Automatic End-To-End Capmaign Execution. Eliminates Inessential Back & Forth And Unumverable Stand Out Sheets </span>
              </div>
              <div className='link'>
                <a href='#'>
                  Get Started &#x2192;
                  </a>
              </div>
            </div>
          </div>
          <div className='box-items'>
          <div className='items'>
              <img src={svg3}></img>
              <p>Market Research</p>
              <div className='p'>
                <span>Enhance Your Business With Our New Age Research Solutions And Seize Opportunities By Acting Resolutely To Promote Modification Through Unjust Insights To Drive Extraordinary Growth</span>
              </div>
              <div className='link'>
                <a href='#'>
                  Get Started &#x2192;
                  </a>
              </div>
            </div>
          </div>
          <div className='box-items'>
          <div className='items'>
              <img src={svg4}></img>
              <p>leaderBoard</p>
              <div className='p'>
                <span>Perceive Insights And Information Of Quite Thousands Of Publishers Across the Social Nedia Platforms </span>
              </div>
              <div className='link'>
                <a href='#'>
                  Get Started &#x2192;
                  </a>
              </div>
            </div>
          </div>
          <div className='box-items'>
          <div className='items'>
              <img src={svg5}></img>
              <p>Brand Quality & Intelligence</p>
              <div className='p'>
                <span>Video Promoting With AI-Powered Ingights Provides Valuable Digital Video Insights That Helps Your Brand To Make And Run Booming Campaigns </span>
              </div>
              <div className='link'>
                <a href='#'>
                  Get Started &#x2192;
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
