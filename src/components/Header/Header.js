import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import instagramLogo from '../../images/instagram-logo.png';
import hamburgerMenu from '../../images/hamburger-menu.png';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropMenu: false
        }
    }

    handleDropMenu = () => {
        this.setState({
            dropMenu: !this.state.dropMenu
        })
    }

    render() {
        return (
            <div>
                <div className='header-box'>
                    <div className='logo-holder'>
                        <img alt='' />
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
                        <a href='https://www.instagram.com/jbudlarsen/'>
                            <img className='instagram-logo' src={instagramLogo} alt='instagram link' />
                        </a>
                    </div>
                    <img className='hamburger-menu' src={hamburgerMenu} alt='' onClick={() => this.handleDropMenu()}/>
                </div>
                <nav className={this.state.dropMenu ? "show-drop-menu" : "hide-drop-menu"}>
                    <Link to='/' >
                        <h3 className='link'>Home</h3>
                    </Link >
                    <Link to='/about' >
                        <h3 className='link'>About</h3>
                    </Link >
                    <Link to='/contact' >
                        <h3 className='link'>Contact</h3>
                    </Link >
                    <a href='https://www.instagram.com/jbudlarsen/'>
                        <img className='instagram-logo-drop' src={instagramLogo} alt='instagram link' />
                    </a>
                </nav>
            </div>
        )
    }
}

export default Header;
