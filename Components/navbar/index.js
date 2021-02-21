import React from 'react'
import Container from '../Utils/Container/'
import { NavbarWrapper, Logo, Box, MainLink } from './styles/navbar'
import Link from 'next/link'

// const Navbar = () => {
//     return (
//         <Container>
//             <nav className="mx-6 my-6 mx-auto text-white h-32">
//                 <div className="flex justify-between">
//                     <Link href="/">
//                         <a>
//                             <img src="/nnlegal-logo.svg" alt="Vercel Logo" className="h-32" />
//                         </a>
//                     </Link>
//                     <Link href='/services'>
//                         <a><h1>Main Services button link</h1></a>
//                     </Link>
//                     <FaBars size='2rem' />
//                 </div>
//             </nav>
//         </Container>
//     )
// }

// export default Navbar

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

Navbar.Link = function NavbarLink({ to, ...restProps }) {
    return (
        <Link href="/services">
            <a>
                <MainLink {...restProps} />
            </a>
        </Link>
    )
}


// Header.Logo = function HeaderLogo({ to, ...restProps }) {
//     return (
//         <ReactRouterLink to={to}>
//             <Logo {...restProps} />
//         </ReactRouterLink>
//     )
// }
