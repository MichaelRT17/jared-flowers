import React, { Component } from 'react';
import './instagramimages.css';

class InstagramImages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                'https://i.pinimg.com/736x/7a/e7/64/7ae764908bda417754cb0268565aba24--instagram-ps.jpg',
                'https://s-media-cache-ak0.pinimg.com/originals/57/08/a6/5708a6784dc5e84763ed4cb10a31bc2b.jpg',
                'https://i.pinimg.com/736x/84/b4/5e/84b45ee07ce69f89eba8ffaa75fe8840--instagram-ps.jpg',
                'https://i.pinimg.com/originals/b9/46/bc/b946bcb05ea808de6ed7829133254856.jpg',
                'https://i.pinimg.com/originals/14/67/50/14675048065d23306901037b69d3e6d6.jpg',
                'https://s-media-cache-ak0.pinimg.com/originals/a7/06/72/a706725b294b458a6bc9ea320da56b93.jpg',
                'https://s-media-cache-ak0.pinimg.com/originals/d8/78/3e/d8783eb5536a41e72497d188bc2a1ef4.jpg',
                'https://i.pinimg.com/originals/88/f6/e2/88f6e2bef78edbcbe44d6769fd668c2b.jpg',
                'https://i.pinimg.com/736x/71/10/e4/7110e44e6562788c2e39f4a422696ad9--old-fashioned-wedding-flower-shops.jpg',
                'https://i.pinimg.com/736x/d4/9d/f3/d49df3909cbeac3fba9a824e09ba1771--florists-glamorous.jpg',
                'https://i.pinimg.com/originals/ad/42/a6/ad42a61191e46653fb0155b75ba9f43c.jpg',
                'https://s-media-cache-ak0.pinimg.com/originals/8a/2e/1b/8a2e1bd15073f927239a8accd9e3aad4.jpg'
            ]
        }
    }

    render() {
        let mappedInstagramImages = this.state.images.map((image, i) => {
            return (
                <div key={i} >
                   <img src={image} alt='instagram flowers' height='360px' style={{margin: '2px 0'}}/> 
                </div> 
            )
        })
        return (
            <div className='image-row-holder'>
                {mappedInstagramImages}
            </div> 
        )
    }
}

export default InstagramImages