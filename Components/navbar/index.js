import React from 'react'
import Container from '../Utils/Container/'
import { NavbarWrapper, Logo, Box, MainLink } from './styles/navbar'
import Link from 'next/link'

export default function Navbar({ children, ...restProps }) {
    return (
        <NavbarWrapper {...restProps}>{children}</NavbarWrapper>
    )
}

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Navbar.Box = function NavbarBox({ children, ...restProps }) {
    return <Box {...restProps}>{children}</Box>
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

Navbar.Link = function NavbarLink({ children, ...restProps }) {
    return (
        <Link href="/services">
            <a>
                <MainLink {...restProps}>{children}</MainLink>
            </a>
        </Link>
    )
}

Navbar.Button = function NavbarButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}