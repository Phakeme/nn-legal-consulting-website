import React from 'react';
import { Hero } from '../Components'
import { Link } from 'react-scroll'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function SimpleSlider({ children }) {

    const zoomOutProperties = {
        duration: 5000,
        transitionDuration: 50,
        infinite: true,
        indicators: false,
        scale: .5,
        arrows: true
    };

    const slideImages = [
        'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=905&q=80',
        'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
    ];

    return (
        <div className="slide-container">
            <Slide {...zoomOutProperties}>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        <span> <Link to="contact" spy={true} duration={0} smooth={true} offset={0} >
                            <Hero.Button>
                                <h3>Contact us</h3>
                            </Hero.Button>
                        </Link></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        <span><Link to="contact" spy={true} duration={0} smooth={true} offset={0} >
                            <Hero.Button>
                                <h3>Contact us</h3>
                            </Hero.Button>
                        </Link></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        <span><Link to="contact" spy={true} duration={0} smooth={true} offset={0} >
                            <Hero.Button>
                                <h3>Contact us</h3>
                            </Hero.Button>
                        </Link></span>
                    </div>
                </div>
            </Slide>
        </div>
    );
}