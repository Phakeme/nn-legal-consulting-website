import React from 'react'
import Container from '../Utils/Container/'
import { ChooseUsWrapper, Title, Content, Wrapper } from './styles/chooseUs'

export default function ChooseUs({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

ChooseUs.Container = function ChooseUsContainer({ children, ...restProps }) {
    return <ChooseUsWrapper {...restProps}>{children}</ChooseUsWrapper>
}

ChooseUs.Wrapper = function ChooseUsWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

ChooseUs.Title = function ChooseUsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

ChooseUs.Content = function ChooseUsContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}
