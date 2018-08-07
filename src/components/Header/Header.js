import React, { Component } from 'react';
import instagramLogo from '../../images/instagram-logo.png';
import hamburgerMenu from '../../images/hamburger-menu.png';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='header-box'>
                    <div className='logo-holder'>
                        <img alt=''/>
                        <h2 className='header-text'>Flowers by Jared</h2>
                    </div>
                    <div className='link-holder'>
                        <h3 className='link'>Home</h3>
                        <h3 className='link'>About</h3>
                        <h3 className='link'>Contact</h3>
                        <img className='instagram-logo' src={instagramLogo} alt='instagram link'/>
                    </div> 
                    <img className='hamburger-menu' src={hamburgerMenu} alt='' />
                </div>
            </div>
        )
    }
}

export default Header;
