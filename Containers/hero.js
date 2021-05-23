import React from 'react'
import { Hero } from '../Components'
import { Link } from 'react-scroll'
import Carousel from 'react-bootstrap/Carousel'
import { HeroLink } from '../Components/hero/HeroLink'

export function HeroContainer() {
    return (
        <Hero>
            <Hero.Wrapper>
                <Hero.Inner>
                    <Hero.Links>
                        <HeroLink
                            to="CorrespondentServices"
                            label="Virtual Assistant Services"
                            bg={`linear-gradient(0deg, rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)),url('/bg.jpg')`}
                        />
                        <HeroLink
                            to="OurLegalServices"
                            label="Legal & Business Consulting Services"
                            bg={`linear-gradient(0deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),url('/bg.jpg')`}
                        />
                        <HeroLink
                            to="OurParalegalServices"
                            label="Paralegal Services"
                            bg={`linear-gradient(0deg, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)),url('/bg.jpg')`}
                        />
                        <HeroLink
                            to="WHY-CHOOSE-US"
                            label="Why Choose Us"
                            bg={`linear-gradient(0deg, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)),url('/bg.jpg')`}
                        />
                    </Hero.Links>
                    <div className="sliderDisplay">
                        <Hero.Showcase>
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
                </Hero.Inner>
            </Hero.Wrapper>
        </Hero>
    )
}