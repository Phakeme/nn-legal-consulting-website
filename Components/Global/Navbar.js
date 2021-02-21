import React from 'react'
import Container from '../Utils/Container'
import { FaBars } from 'react-icons/fa';
import Link from 'next/link'

const Navbar = () => {
    return (
        <Container>
            <nav className="mx-6 my-6 mx-auto text-white h-32">
                <div className="flex justify-between">
                    <Link href="/">
                        <a>
                            <img src="/nnlegal-logo.svg" alt="Vercel Logo" className="h-32" />
                        </a>
                    </Link>
                    <Link href='/services'>
                        <a><h1>Main Services button link</h1></a>
                    </Link>
                    <FaBars size='2rem' />
                </div>
            </nav>
        </Container>
    )
}

export default Navbar
