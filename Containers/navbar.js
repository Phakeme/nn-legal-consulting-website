import React from 'react'
import { Navbar } from '../Components'

import { FaBars } from 'react-icons/fa';

export function NavbarContainer({ children }) {
    return (
        <Navbar>
            <Navbar.Container>
                <Navbar.Box>
                    <Navbar.Logo alt="Text" src="/nnlegal-logo.svg" />
                    <Navbar.Link>
                        <h3>Click here to see more</h3>
                    </Navbar.Link>
                    <FaBars size='2rem' />
                </Navbar.Box>
            </Navbar.Container>
        </Navbar>
    )
}


// import logo from '../logo.svg'

// export function HeaderContainer({ children }) {
//     return (
//         <Header>
//             <Header.Frame>
//                 <Header.Logo to={ROUTES.HOME} alt="Relax" src={logo} />
//                 <Header.ButtonLink to={ROUTES.SIGN_IN} >Signin</Header.ButtonLink>
//             </Header.Frame>
//             {children}
//         </Header>
//     )
// }