import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
// import { Sidebar } from '../components/Sidebar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Levxa - Global News Archives</title>
        <link rel="icon" href="/components/navbar/brand.png"/>
      </Head>

      <Navbar />


      <main>
        <h1 className={styles.word}>Welcome to Levxa.com</h1>
      </main>

    </div>
  )
}
