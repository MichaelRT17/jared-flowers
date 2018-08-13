import React from 'react';
import instagramLogo from '../../images/instagram-logo.png';
import './footer.css'

function Footer() {
    return (
        <div className='footer-holder'>
            <h2>Flowers By Jared</h2>
            <img className='instagram-logo' src={instagramLogo} alt='instagram link'/>
        </div> 
    )
}

export default Footer;