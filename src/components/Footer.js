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
                                    <div className='linksa'>
                                        {
                                            item.link.map((item, index) => {
                                                return (
                                                    <>
                                                    <a href='#'>
                                                   {item.text}
                                                   </a>
                                                    </>
                                            )})}
                                    </div>
                                </div>
                            </>
                        )})}
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
