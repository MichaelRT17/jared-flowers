import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        <h2 className='header-text'>Flowers By Jared</h2>
                    </div>
                    <div className='link-holder'>
                        <Link to='/' >
                        <h3 className='link'>Home</h3>
                        </Link >
                        <Link to='/about' >
                        <h3 className='link'>About</h3>
                        </Link >
                        <Link to='/contact' >
                        <h3 className='link'>Contact</h3>
                        </Link >
                        <img className='instagram-logo' src={instagramLogo} alt='instagram link'/>
                    </div> 
                    <img className='hamburger-menu' src={hamburgerMenu} alt='' />
                </div>
            </div>
        )
    }
}

export default Header;
