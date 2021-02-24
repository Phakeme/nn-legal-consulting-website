import React from 'react'
import { Hero } from '../Components'
import Image from 'next/image'




export function HeroContainer({ children }) {
    return (
        <Hero>
            <Hero.Wrapper>
                <Hero.Inner>
                    <Hero.Links>
                        <Hero.LinkItem1>
                            <Hero.LinkItemText>
                                <h2>Research & <br /> Analysis</h2>
                            </Hero.LinkItemText>
                        </Hero.LinkItem1>
                        <Hero.LinkItem2>    <Hero.LinkItemText>
                            <h2>Strategy & <br /> Planning</h2>
                        </Hero.LinkItemText></Hero.LinkItem2>
                        <Hero.LinkItem3>    <Hero.LinkItemText>
                            <h2>Plan & <br /> Execution</h2>
                        </Hero.LinkItemText></Hero.LinkItem3>
                        <Hero.LinkItem4>    <Hero.LinkItemText>
                            <h2>Mergers & <br />Acquisitions </h2>
                        </Hero.LinkItemText></Hero.LinkItem4>
                    </Hero.Links>
                    <Hero.Showcase style={{
                        backgroundImage: "url(" + "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=905&q=80" + ")",
                    }}>
                        <Hero.LinkItemText>

                            <Hero.Button>
                                <h3>Expore more</h3>
                            </Hero.Button>
                        </Hero.LinkItemText>
                    </Hero.Showcase>
                </Hero.Inner>
            </Hero.Wrapper>
        </Hero>
    )
}