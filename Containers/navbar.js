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
                        <h3>Our Correspondent services</h3>
                    </Navbar.Link>
                    <FaBars size='2rem' />
                </Navbar.Box>
            </Navbar.Container>
        </Navbar>
    )
}