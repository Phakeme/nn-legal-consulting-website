import React from 'react'

const Navbar = () => {
    return (
        <nav className="mx-6 my-6 max-w-6xl max-w-screen-xl mx-auto text-white h-32">
            <div className="flex justify-between">
                <a
                    href=""
                    rel="noopener noreferrer"
                >
                    <img src="/nnlegal-logo.svg" alt="Vercel Logo" className="h-32" />
                </a>
                <h1>Main button link</h1>
                <h1>Burger links</h1>
            </div>
        </nav>
    )
}

export default Navbar
