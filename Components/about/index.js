import React from 'react'
import Container from '../Utils/Container/'
import { AboutWrapper, Title, Wrapper, DocWrapper, Sidebar, Content, Quote, Ul, Li, Heading, SubHeading } from './styles/about'

export default function About({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

About.Container = function AboutContainer({ children, ...restProps }) {
    return <AboutWrapper {...restProps}>{children}</AboutWrapper>
}

About.Quote = function AboutQuote({ children, ...restProps }) {
    return <Quote {...restProps}>{children}</Quote>
}

About.Title = function AboutTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

About.Wrapper = function AboutWrapper({ children, ...restProps }) {
    return (<Wrapper {...restProps}>{children}</Wrapper>)
}

About.Sidebar = function AboutSidebar({ children, ...restProps }) {
    return <Sidebar {...restProps}>{children}</Sidebar>
}

About.Ul = function AboutUl({ children, ...restProps }) {
    return <Ul {...restProps}>{children}</Ul>
}

About.Li = function AboutLi({ children, ...restProps }) {
    return <Li  {...restProps}>{children}</Li>
}

About.Heading = function AboutHeading({ children, ...restProps }) {
    return <Heading  {...restProps}>{children}</Heading>
}

About.SubHeading = function AboutSubHeading({ children, ...restProps }) {
    return <SubHeading {...restProps}>{children}</SubHeading>
}

About.DocWrapper = function AboutDocWrapper({ children, ...restProps }) {
    return <DocWrapper {...restProps}>{children}</DocWrapper>
}

About.Content = function AboutContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}
