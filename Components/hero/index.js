import React from 'react'
import Container from '../Utils/Container'
import { Wrapper, Inner, Showcase, Links, LinkItem, LinkItemText, Button } from './styles/hero'

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

Hero.LinkItem = function HeroLinkItem({ children, ...restProps }) {
    return (
        <LinkItem {...restProps}>{children}</LinkItem>
    )
}

Hero.Button = function HeroButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>{children}</Button>
    )
}