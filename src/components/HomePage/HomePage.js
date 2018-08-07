import React from 'react';
import { Parallax } from 'react-parallax';
import Header from '../Header/Header';

function HomePage() {
    return (
        <div>
            <Header />
            <Parallax
            bgImage={require('../../images/main-image.jpg')}
            bgImageAlt='main flowers'
            strength={200}
            >
            <div style={{ height: '700px' }} /> 
            </Parallax>
        </div> 
    )
}

export default HomePage;