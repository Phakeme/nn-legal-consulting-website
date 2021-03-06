import React, { useState } from 'react'
import { Navbar, Sidebar } from '../Components'
import { Link } from 'react-scroll'

import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export function NavbarContainer({ children }) {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <Navbar>
            <Navbar.Container>
                <Navbar.Inner>
                    <Navbar.Logo alt="Text" src="/nnlegal-logo.svg" />
                    <Navbar.Qoute>“Your legal minds with a personal touch”</Navbar.Qoute>
                    <Navbar.Icon>
                        <FaBars size='2rem' onClick={showSidebar} />
                    </Navbar.Icon>
                </Navbar.Inner>
            </Navbar.Container>
            <Sidebar sidebar={sidebar} onClick={showSidebar}>
                <Sidebar.Content>
                    <Sidebar.Icon>
                        <ImCross size='1.5rem' />
                    </Sidebar.Icon>
                    <Sidebar.Body>
                        <Sidebar.Links>
                            Body
                        </Sidebar.Links>
                    </Sidebar.Body>
                </Sidebar.Content>

            </Sidebar>
        </Navbar>
    )
}