import React from 'react'
import Container from '../Utils/Container/'
import { Wrapper, Title, Details } from './styles/contact'

export default function Contact({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Contact.Wrapper = function ContactWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Contact.Details = function ContactDetails({ children, ...restProps }) {
    return <Details {...restProps}>{children}</Details>
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
