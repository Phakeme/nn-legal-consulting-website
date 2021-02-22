import React from 'react'
import { Hero } from '../Components'
import Image from 'next/image'




export function HeroContainer({ children }) {
    return (
        <Hero>
            <Hero.Wrapper>
                <Hero.Inner>
                    <Hero.Links>
                        <Hero.LinkItem><p>Text</p></Hero.LinkItem>
                        <Hero.LinkItem><p>Text</p></Hero.LinkItem>
                        <Hero.LinkItem><p>Text</p></Hero.LinkItem>
                        <Hero.LinkItem><p>Text</p></Hero.LinkItem>
                    </Hero.Links>
                    <Hero.Showcase>
                        <p>Text</p>
                    </Hero.Showcase>
                </Hero.Inner>
            </Hero.Wrapper>
        </Hero>
    )
}