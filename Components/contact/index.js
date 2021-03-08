import React from 'react'
import Container from '../Utils/Container/'
import { Wrapper, Title, Details, Inner, Icon, Info, Grid } from './styles/contact'

export default function Contact({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Contact.Wrapper = function ContactWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Contact.Inner = function ContactInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

Contact.Details = function ContactDetails({ children, ...restProps }) {
    return <Details {...restProps}>{children}</Details>
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Contact.Grid = function ContactGrid({ children, ...restProps }) {
    return <Grid {...restProps}>{children}</Grid>
}

Contact.Icon = function ContactIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}

Contact.Info = function ContactInfo({ children, ...restProps }) {
    return <Info {...restProps}>{children}</Info>
}
