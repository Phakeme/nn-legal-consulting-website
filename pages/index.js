import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FooterContainer } from "../Containers/footer"
import { NavbarContainer } from "../Containers/navbar"
import { AboutContainer } from "../Containers/about"
import { ContactContainer } from "../Containers/contact"
import { HeroContainer } from "../Containers/hero"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NN Legal Consulting. Your legal minds with a personal touch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <HeroContainer />
      <AboutContainer />
      <ContactContainer />
      <FooterContainer />
    </div>
  )
}
