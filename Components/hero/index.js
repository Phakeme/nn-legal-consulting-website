import React from 'react'
import Container from '../Utils/Container'
import { Wrapper, Inner, Showcase, Links, LinkItem } from './styles/hero'


export default function Hero({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Hero.Wrapper = function HeroWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Hero.Inner = function HeroInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

Hero.Showcase = function HeroShowcase({ children, ...restProps }) {
    return <Showcase {...restProps}>{children}</Showcase>
}

Hero.Links = function HeroLinks({ children, ...restProps }) {
    return <Links {...restProps}>{children}</Links>
}

Hero.LinkItem = function HeroLinkItem({ children, ...restProps }) {
    return <LinkItem {...restProps}>{children}</LinkItem>
}


{/* <Container>
<HeroWrapper>
    <div className="grid grid-flow-col grid-cols-2 gap-4 h-full">
        <div className="text-white grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
            <div className="bg-blueDark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-blueDark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-blueDark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-blueDark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className="bg-hero-image">
            <h1 className=""> Right Section HeroWrapper</h1>
        </div>
    </div>
</HeroWrapper>
</Container> */}