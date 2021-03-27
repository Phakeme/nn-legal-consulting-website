import React from 'react'
import { Hero } from '../Components'

import { Link } from 'react-scroll'
import SimpleSlider from './imageSlider'

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
                                        <h2>Correspondent Services</h2>
                                    </div>
                                </Hero.LinkItemText>
                            </Hero.LinkItem>
                        </Link>
                        <Link to="OurLegalServices" spy={true} duration={0} smooth={true} offset={-90} >
                            <Hero.LinkItem style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),url('/bg.jpg')`
                            }}>
                                <Hero.LinkItemText>
                                    <h2>legal services</h2>
                                </Hero.LinkItemText>
                            </Hero.LinkItem>
                        </Link>
                        <Link to="OurEnterpriseServices" spy={true} duration={0} smooth={true} offset={-90} >
                            <Hero.LinkItem style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)),url('/bg.jpg')`
                            }}>
                                <Hero.LinkItemText>
                                    <h2>Enterprise services</h2>
                                </Hero.LinkItemText>
                            </Hero.LinkItem>
                        </Link>

                        <Link to="WHY-CHOOSE-US" duration={0} spy={true} smooth={true} offset={-90} >
                            <Hero.LinkItem style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)),url('/bg.jpg')`
                            }}>
                                <Hero.LinkItemText>
                                    <h2>why choose us </h2>
                                </Hero.LinkItemText>
                            </Hero.LinkItem>
                        </Link>
                    </Hero.Links>

                    <Hero.Showcase>
                        <SimpleSlider></SimpleSlider>
                        {/* <Link to="contact" spy={true} duration={0} smooth={true} offset={0} >
                            <Hero.Button>
                                <h3>Contact us</h3>
                            </Hero.Button>
                        </Link> */}
                    </Hero.Showcase>
                </Hero.Inner>
            </Hero.Wrapper>
        </Hero>
    )
}