import React from 'react'
import Container from '../Utils/Container/'
import { AboutWrapper, Title, Wrapper, Content } from './styles/about'

export default function About({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

About.Container = function AboutContainer({ children, ...restProps }) {
    return <AboutWrapper {...restProps}>{children}</AboutWrapper>
}

About.Wrapper = function AboutWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

About.Content = function AboutContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}


About.Title = function AboutTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
