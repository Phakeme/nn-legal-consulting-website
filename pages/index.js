import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { FooterContainer } from "../Containers/footer"
import { NavbarContainer } from "../Containers/navbar"
import { AboutContainer } from "../Containers/about"
import { ContactContainer } from "../Containers/contact"
import { HeroContainer } from "../Containers/hero"
import { FounderContainer } from '../Containers/founder'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NN Legal Consulting. Your legal minds with a personal touch</title>
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <NavbarContainer />
      <HeroContainer />
      <FounderContainer />
      <AboutContainer />
      <ContactContainer />
      <FooterContainer />
    </div>
  )
}
