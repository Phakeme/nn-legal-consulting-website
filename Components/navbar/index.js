import React from 'react'
import Container from '../Utils/Container/'
import { NavbarWrapper, Logo, Inner, Icon, Qoute } from './styles/navbar'
import Link from 'next/link'

export default function Navbar({ children, ...restProps }) {
    return (
        <NavbarWrapper {...restProps}>{children}</NavbarWrapper>
    )
}

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Navbar.Inner = function NavbarInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

Navbar.Logo = function NavbarLogo({ to, ...restProps }) {
    return (
        <Link href="/">
            <a>
                <Logo {...restProps} />
            </a>
        </Link>
    )
}

Navbar.Icon = function NavbarIcon({ children, ...restProps }) {
    return (
        <Icon {...restProps}>{children}</Icon>
    )
}

Navbar.Button = function NavbarButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Navbar.Qoute = function NavbarQoute({ children, ...restProps }) {
    return <Qoute {...restProps}>{children}</Qoute>
}