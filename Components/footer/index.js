import React from 'react'
import Container from '../Utils/Container/'
import { FooterWrapper, Title } from './styles/footer'

export default function Footer({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Footer.Container = function FooterContainer({ children, ...restProps }) {
    return <FooterWrapper {...restProps}>{children}</FooterWrapper>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
