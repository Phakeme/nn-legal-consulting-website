import Head from 'next/head'
// import Hero from '../Components/Home/Hero/'

import { FooterContainer } from "../Containers/footer"
import { NavbarContainer } from "../Containers/navbar"
import styles from '../styles/Home.module.css'
// import Navbar from '../Components/Global/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NN Legal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      {/* <Hero /> */}
      <FooterContainer />
    </div>
  )
}
