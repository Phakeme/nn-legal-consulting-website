import React from 'react'
import Container from '../Utils/Container'
import { FounderWrapper, QuoteWrapper, Inner, ImageWrapper, Content, Img, Li, Heading, SubHeading } from './styles/founder'

export default function Founder({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Founder.Container = function FounderContainer({ children, ...restProps }) {
    return <FounderWrapper {...restProps}>{children}</FounderWrapper>
}

Founder.Quote = function FounderQuote({ children, ...restProps }) {
    return <QuoteWrapper {...restProps}>{children}</QuoteWrapper>
}

Founder.Inner = function FounderInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}


Founder.Img = function FounderImg({ children, ...restProps }) {
    return <Img {...restProps}>{children}</Img>
}

Founder.ImageWrapper = function FounderImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}


Founder.Content = function FounderContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}
