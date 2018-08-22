import React from 'react';
import Header from '../Header/Header';
import userIcon from '../../images/jared-face.jpg';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Parallax } from 'react-parallax';
import './aboutpage.css';

function AboutPage() {
    return (
        <div>
            <Header />
            <Parallax
                bgImage={require('../../images/main-image.jpg')}
                bgStyle={{opacity: .5}}
                strength={400}
                blur={{ min: -15, max: 15 }}
            >
            <img src={userIcon} className='user-icon' alt='owner icon' />
            </Parallax>
            <div className='about-paragraphs'>
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
                <p>
                    Native Flower Company is the premier source for
                    the best flowers in Salt Lake City. We strive for
                    excellence as your local, full-service Salt Lake
                    City florist offering the finest in uniquely-designed,
                    custom flower arrangements delivered to your door.
            </p>
            </div>
            <hr className='divider' />
            <div className='contact-holder'>
                <h2>Have A Question?</h2>
                <Link to='/contact' >
                    <h4 className='link'>Contact Us</h4>
                </Link >
            </div>
            <div style={{ height: '88px', background: '#C0FDFB' }} />
            <Footer />
        </div>
    )
}

export default AboutPage;