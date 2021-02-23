import React from 'react'
import Container from '../Utils/Container'
import { Wrapper, Inner, Showcase, Links, LinkItem1, LinkItem2, LinkItem3, LinkItem4, LinkItemText, Button } from './styles/hero'
import Link from 'next/link'


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

Hero.LinkItemText = function HeroLinkItemText({ children, ...restProps }) {
    return <LinkItemText {...restProps}>{children}</LinkItemText>
}

Hero.LinkItem1 = function HeroLinkItem1({ children, ...restProps }) {
    return (
        <Link href="/services">
            <a>
                <LinkItem1 {...restProps}>{children}</LinkItem1>
            </a>
        </Link>
    )
}

Hero.LinkItem2 = function HeroLinkItem2({ children, ...restProps }) {
    return (
        <Link href="/services">
            <a>
                <LinkItem2 {...restProps}>{children}</LinkItem2>
            </a>
        </Link>
    )
}

Hero.LinkItem3 = function HeroLinkItem3({ children, ...restProps }) {
    return (
        <Link href="/services">
            <a>
                <LinkItem3 {...restProps}>{children}</LinkItem3>
            </a>
        </Link>
    )
}

Hero.LinkItem4 = function HeroLinkItem4({ children, ...restProps }) {
    return (
        <Link href="/services">
            <a>
                <LinkItem4 {...restProps}>{children}</LinkItem4>
            </a>
        </Link>
    )
}

Hero.Button = function HeroButton({ children, ...restProps }) {
    return (
        <Link href="/services">
            <a>
                <Button {...restProps}>{children}</Button>
            </a>
        </Link>
    )
}