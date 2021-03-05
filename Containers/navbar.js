import React from 'react'
import { Navbar } from '../Components'
import { Link } from 'react-scroll'

import { FaBars } from 'react-icons/fa';

export function NavbarContainer({ children }) {
    return (
        <Navbar>
            <Navbar.Container>
                <Navbar.Box>
                    <Navbar.Logo alt="Text" src="/nnlegal-logo.svg" />
                    {/* <Link to="WHY-CHOOSE-US" spy={true} smooth={true} offset={-90} duration={0}>
                        <Navbar.MainButton>
                            <h3>Correspondent services</h3>
                        </Navbar.MainButton>
                    </Link> */}
                    <FaBars size='2rem' />
                </Navbar.Box>
            </Navbar.Container>
        </Navbar>
    )
}