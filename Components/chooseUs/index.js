import React from 'react'
import Container from '../Utils/Container/'
import { ChooseUsWrapper, Title } from './styles/chooseUs'

export default function ChooseUs({ children, ...restProps }) {
    return (
        <ChooseUsWrapper {...restProps}>{children}</ChooseUsWrapper>
    )
}

ChooseUs.Container = function ChooseUsContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

ChooseUs.Title = function ChooseUsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
