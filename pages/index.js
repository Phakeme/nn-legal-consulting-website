import Head from 'next/head'
import Hero from '../Components/Home/Hero'
import Footer from '../Components/Global/Footer'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Utils/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NN Legal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mx-3">
        <Navbar />
        <Hero />
      </div>
      <Footer />

    </div>
  )
}
