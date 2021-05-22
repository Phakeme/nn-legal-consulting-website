import React from 'react'
import { Hero } from '../Components'

import { Link } from 'react-scroll'
// import SimpleSlider from './imageSlider'
import Carousel from 'react-bootstrap/Carousel'

export function HeroContainer({ children }) {
    return (
        <Hero>
            <Hero.Wrapper>
                <Hero.Inner>
                    <Hero.Links>
                        <Link to="CorrespondentServices" duration={0} spy={true} smooth={true} offset={-90} >
                            <Hero.LinkItem style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)),url('/bg.jpg')`
                            }}>
                                <Hero.LinkItemText >
                                    <div>
                                        <h3>Virtual Assistant Services</h3>
                                    </div>
                                </Hero.LinkItemText>
                            </Hero.LinkItem>
                        </Link>
                        <Link to="OurLegalServices" spy={true} duration={0} smooth={true} offset={-90} >
                            <Hero.LinkItem style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),url('/bg.jpg')`
                            }}>
                                <Hero.LinkItemText>
                                    <h3>Legal Services</h3>
                                </Hero.LinkItemText>
                            </Hero.LinkItem>
                        </Link>
                        <Link to="OurEnterpriseServices" spy={true} duration={0} smooth={true} offset={-90} >
                            <Hero.LinkItem style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)),url('/bg.jpg')`
                            }}>
                                <Hero.LinkItemText>
                                    <h3>Paralegal Services</h3>
                                </Hero.LinkItemText>
                            </Hero.LinkItem>
                        </Link>

                        <Link to="WHY-CHOOSE-US" duration={0} spy={true} smooth={true} offset={-90} >
                            <Hero.LinkItem style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)),url('/bg.jpg')`
                            }}>
                                <Hero.LinkItemText>
                                    <h3>Why Choose Us </h3>
                                </Hero.LinkItemText>
                            </Hero.LinkItem>
                        </Link>
                    </Hero.Links>
                    <div className="sliderStatic">
                        <Hero.Showcase style={{
                            backgroundImage: "url(" + "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=905&q=80" + ")",
                        }}>
                            <Link to="contact" spy={true} duration={0} smooth={true} offset={0} >
                                <Hero.Button>
                                    <span>Contact us</span>
                                </Hero.Button>
                            </Link>
                        </Hero.Showcase>
                    </div>
                    <div className="sliderDisplay">
                        <Hero.Showcase>
                            {/* <SimpleSlider /> */}
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/image.jpg"
                                        alt="First slide"
                                    />

                                    <Carousel.Caption>
                                        <Link to="contact" spy={true} duration={0} smooth={true} offset={0} >
                                            <Hero.Button>
                                                <span>Contact us</span>
                                            </Hero.Button>
                                        </Link>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/image2.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <Link to="contact" spy={true} duration={0} smooth={true} offset={0} >
                                            <Hero.Button>
                                                <span>Contact us</span>
                                            </Hero.Button>
                                        </Link>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Hero.Showcase>
                    </div>
                </Hero.Inner>
            </Hero.Wrapper>
        </Hero>
    )
}