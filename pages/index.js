import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Levxa - Global News Archives</title>
        <link rel="icon" href="/fav.ico"/>
      </Head>

      <Navbar />

      <main>
        <h1 className={styles.word}>Welcome to Levxa.com</h1>
      </main>

    </div>
  )
}
