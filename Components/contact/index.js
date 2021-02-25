import React from 'react'
import Container from '../Utils/Container/'
import { ContactWrapper, Title, Content } from './styles/contact'

export default function Contact({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Contact.Container = function ({ children, ...restProps }) {
    return <ContactWrapper {...restProps}>{children}</ContactWrapper>
}

Contact.Content = function ({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
