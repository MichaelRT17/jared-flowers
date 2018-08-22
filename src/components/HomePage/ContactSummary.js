import React from 'react';
import { Link } from 'react-router-dom';
import './contactsummary.css';

function ContactSummary() {
    return (
        <div className='contact-holder'>
            <h2>Have A Question?</h2>
            <Link to='/contact' >
            <h4 className='link'>Contact Us</h4>
            </Link >
        </div> 
    )
}

export default ContactSummary;