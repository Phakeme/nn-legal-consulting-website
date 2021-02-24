import React from 'react'
import Container from '../Utils/Container/'
import { ContactWrapper, Title } from './styles/contact'

export default function Contact({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Contact.Container = function ContactContainer({ children, ...restProps }) {
    return <ContactWrapper {...restProps}>{children}</ContactWrapper>
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
