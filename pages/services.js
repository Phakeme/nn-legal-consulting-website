import React from 'react'
import Head from 'next/head'
import Navbar from '../Components/Global/Navbar'
import Container from '../Components/Utils/Container'

const services = () => {

    return (
        <Container>
            <Head>
                <title>Services</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <h1 className='text-white'>Services</h1>
        </Container>
    )
}

export default services
