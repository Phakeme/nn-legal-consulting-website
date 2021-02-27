import React, { useState, createContext, useContext } from 'react'
import Container from '../Utils/Container/'
import { AboutWrapper, Title, Wrapper, DocWrapper, Sidebar, Content, Quote, Ul, Li, Heading, SubHeading } from './styles/about'

const ToggleContext = createContext()

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
    const [isOpen, setIsOpen] = useState(false)
    return (<ToggleContext.Provider value={{ isOpen, setIsOpen }}>
        <Li {...restProps}>{children}</Li>
    </ToggleContext.Provider>
    )
}

About.Heading = function AboutHeading({ children, ...restProps }) {
    const { isOpen, setIsOpen } = useContext(ToggleContext)
    return <Heading onClick={() => setIsOpen((isOpen) => !isOpen)} {...restProps}>{children}</Heading>
}

About.SubHeading = function AboutSubHeading({ children, ...restProps }) {
    const { isOpen } = useContext(ToggleContext)
    return isOpen ? <SubHeading {...restProps}>{children}</SubHeading> : null
}

About.DocWrapper = function AboutDocWrapper({ children, ...restProps }) {
    return <DocWrapper {...restProps}>{children}</DocWrapper>
}

About.Content = function AboutContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}
