import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Navbar, Sidebar, About } from '../Components'
import { Data } from '../Components/about/Data'
import { FaBars, FaAngleUp } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export function NavbarContainer({ children }) {
    const [sidebar, setSidebar] = useState(false)
    const [showBackTopButton, setShowBackTopButton] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    if (process.browser) {
        // Client-side-only code
        const showToTopButton = () => {
            if (window.scrollY >= 754) {
                setShowBackTopButton(true)
            } else {
                setShowBackTopButton(false)
            }
        }
        window.addEventListener('scroll', showToTopButton)
    }



    return (
        <Navbar name="home">
            <Navbar.Container>
                <Navbar.Inner>
                    <Navbar.Logo alt="Text" src="/nnlegal-logo.svg" />
                    <Navbar.Qoute>“Your legal minds with a personal touch”{ }</Navbar.Qoute>
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
                            <About.Ul >
                                {Data.map((item, index) => (
                                    <div key={index}>
                                        <Link to={item.to} duration={0} spy={true} smooth={true} offset={-90} key={index} >
                                            <About.Heading onClick={() => showSidebar(index)} key={index}>
                                                {item.mainLink}
                                            </About.Heading>
                                        </Link>
                                        {sidebar === index ? <About.Ul>
                                        </About.Ul> : null}
                                    </div>
                                ))}
                            </About.Ul>
                        </Sidebar.Links>
                    </Sidebar.Body>
                </Sidebar.Content>
            </Sidebar>
            {showBackTopButton ? <Link to="home" duration={0} spy={true} smooth={true} offset={0}  ><Navbar.ToTop><FaAngleUp /></Navbar.ToTop></Link> : null}
        </Navbar>
    )
}