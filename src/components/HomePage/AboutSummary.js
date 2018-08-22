import React from 'react';
import { Link } from 'react-router-dom';
import './aboutsummary.css'

function AboutSummary() {
    return (
        <div className='about-holder'>
            <h2>About Us</h2>
            <p>
            Native Flower Company is the premier source for
            the best flowers in Salt Lake City. We strive for 
            excellence as your local, full-service Salt Lake 
            City florist offering the finest in uniquely-designed, 
            custom flower arrangements delivered to your door. 
            Native Flower Company bouquets and floral arrangements 
            are created by our professional florists using the 
            freshest, most beautiful seasonal blooms we can find.
            </p>
            <Link to='/about' >
            <h4 className='link'>Learn More</h4>
            </Link >
            <hr className='divider' />
        </div> 
    )
}

export default AboutSummary;