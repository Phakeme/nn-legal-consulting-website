import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import Navbar from '../Components/Global/Navbar'
// import Container from '../Components/Utils/Container'

const services = () => {

    return (
        <>
            <Head>
                <title>Services</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Navbar /> */}
            <Link href="/">
                <a><h1>Home</h1></a>
            </Link>
        </>
    )
}

export default services
