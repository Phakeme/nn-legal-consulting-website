import React from 'react'
import Container from '../Utils/Container'
import { UnionWrapper, Logo, Inner, Logos, Heading } from './styles/union'

export default function Union({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Union.Container = function UnionContainer({ children, ...restProps }) {
    return <UnionWrapper {...restProps}>{children}</UnionWrapper>
}

Union.Inner = function UnionInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

Union.Heading = function UnionHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}

Union.Logos = function UnionLogos({ children, ...restProps }) {
    return <Logos {...restProps}>{children}</Logos>
}
Union.Logo = function UnionLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>
}
