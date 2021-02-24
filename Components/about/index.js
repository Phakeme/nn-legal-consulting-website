import React from 'react'
import Container from '../Utils/Container/'
import { AboutWrapper, Title } from './styles/about'

export default function About({ children, ...restProps }) {
    return (
        <AboutWrapper {...restProps}>{children}</AboutWrapper>
    )
}

About.Container = function AboutContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

About.Title = function AboutTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
