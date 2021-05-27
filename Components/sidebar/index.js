import React from 'react'
import { Wrapper, Body, Icon, Content, Links } from './styles/sidebar'

export default function SideBar({ children, ...restProps }) {
    return (
        <Wrapper {...restProps}>{children}</Wrapper>
    )
}

SideBar.Body = function SideBarBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}

SideBar.Icon = function SideBarIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}

SideBar.Content = function SideBarContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
}

SideBar.Links = function SideBarLinks({ children, ...restProps }) {
    return <Links {...restProps}>{children}</Links>
}