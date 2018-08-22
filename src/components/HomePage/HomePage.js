import React from 'react';
import { Parallax } from 'react-parallax';
import Header from '../Header/Header';
import InstagramImages from './InstagramImages';
import AboutSummary from './AboutSummary';
import ContactSummary from './ContactSummary';
import Footer from '../Footer/Footer';
// import decoration from '../../images/decoration.png';

function HomePage() {
    return (
        <div>
            <Header />
            <Parallax
                bgImage={require('../../images/main-image.jpg')}
                bgImageAlt='main flowers'
                bgStyle={{ opacity: .7 }}
                strength={400}
                blur={{ min: -15, max: 15 }}
            >
                <div style={{ height: '640px' }} />
            </Parallax>
            <Parallax
                strength={200}
            >
                <div style={{ height: '88px', background: '#C0FDFB' }} />
            </Parallax>
            <Parallax
                strength={200}
            >
                <InstagramImages />
            </Parallax>
            <Parallax
                strength={200}
            >
                <div style={{ height: '88px', background: '#C0FDFB' }} />
            </Parallax>
            <Parallax
                strength={200}
            >
                <AboutSummary />
                <ContactSummary />
            </Parallax>
            <Parallax
                strength={200}
            >
                <div style={{ height: '88px', background: '#C0FDFB' }} />
            </Parallax>
            <Footer />
        </div >
    )
}

export default HomePage;