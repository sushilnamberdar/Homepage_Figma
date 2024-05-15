import React from 'react'
import './footer.css';
import instagram from '../images/instagram.svg'
import you from '../images/youtube.svg'
import { footerdata } from './data/webdata';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-links'>
                {
                    footerdata.map((item, index) => {

                        return (
                            <>
                                <div className='links'>
                                    <h4>{item.title}</h4>
                                    {/* <a href='#'>{item.link}</a> */}
                                </div>
                            </>
                        )
                    }

                    )
                }

                {/* <div className='footer-home'>
                    <h4>Home</h4>
                    <a href='#'>I'm A Creator</a>
                    <a href='#' >Top InFluencer</a>
                    <a href='#'>Contact Us</a>
                </div> */}
                {/* <div className='footer-Creator'>
                    <h4>I'm A Creator</h4>
                    <a href='#'>Top Brands</a>
                    <a href='#'> Why Gcc</a>
                    <a href='#'>App Features</a>
                    <a href='#'>The Process</a>
                    <a href='#'>Top Creators</a>
                </div>
                <div className='footer-info'>
                    <h4>Info</h4>
                    <a href='#'>Terms & Conditions</a>
                    <a href='#'> Privacy Policy</a>
                    <a href='#'>About Us</a>

                </div>
                <div className='footer-contact'>
                    <h4>Contact Us </h4>
                    <a href='#'>306,Ram Mander Rd, South Extension,<br></br>Block A, New Delhi 110049</a>
                    <a href='#'>Info@Wingsup.Media</a>
                    <a href='#'>9991111999</a>
                </div>
                 */}
            </div>

            <div className='hr'>
                <hr />
            </div>
            <div className='copyright-social-medial-logo'>
                <div>
                    The Wingsup Media. &copy; 2024
                </div>
                <div>
                    <a href='#'>
                        <img src={instagram} />
                        <img src={you} />
                    </a>
                </div>
            </div>

        </div>
    )
}
