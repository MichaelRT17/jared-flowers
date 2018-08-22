import React from 'react';
import instagramLogo from '../../images/instagram-logo.png';
import './footer.css'

function Footer() {
    return (
        <div className='footer-holder'>
            <h2>Flowers By Jared</h2>
            <a href='https://www.instagram.com/jbudlarsen/'>
            <img className='instagram-logo-footer' src={instagramLogo} alt='instagram link'/>
            </a>
        </div> 
    )
}

export default Footer;