import * as React from 'react';

import './ArticleList.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, redirect } from 'react-router-dom';
import cricketimg1 from '../../assets/images/cricketimg1.jpg';
import cricketimg2 from '../../assets/images/cricketimg2.jpeg';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.jpg';
import img7 from '../../assets/images/img7.jpg';
import img9 from '../../assets/images/img9.jpg';
import newzteam from '../../assets/images/teams/newzteam.jpeg';
import usteam from '../../assets/images/teams/usteam.jpg';
import img2 from '../../assets/images/img2.png';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.png';
import img8 from '../../assets/images/img8.png';
import img18 from '../../assets/images/img18.png';
import img19 from '../../assets/images/img19.png';
import img20 from '../../assets/images/img20.png';
import img21 from '../../assets/images/img21.png';

import Gallery from 'react-photo-gallery';
import PhotoStory  from '../photo-story/PhotoStory'
const photos = [
    {
        src: usteam,
        width: 4,
        height: 3
    },
    {
        src: newzteam,
        width: 2,
        height: 1
    },
    {
        src: cricketimg1,
        width: 3,
        height: 2
    }, 
    {
        src: cricketimg2,
        width: 1,
        height: 1
    },
    {
        src: img3,
        width: 1,
        height: 1
    },
    {
        src: img4,
        width: 4,
        height: 3,
    },
    {
        src: img9,
        width: 2,
        height: 1
    },
    {
        src: img2,
        width: 3,
        height: 2,
    },
    {
        src: img5,
        width: 4,
        height: 2
    },
    {
        src: img6,
        width: 3,
        height: 2,
    },
    {
        src: img8,
        width: 3,
        height: 2.78,
    },
    {
        src: img4,
        width: 2,
        height: 1
    },
    {
        src: img7,
        width: 3,
        height: 2,
    },
    {
        src: cricketimg2,
        width: 4,
        height: 2
    },
];
const PhotoGallery = () => {
    return (
        <div>
            {/* <Gallery
                direction={"column"}
                photos={photos} /> */}
                <PhotoStory />
        </div>
    )
}

export default PhotoGallery;


