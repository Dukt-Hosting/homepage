import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar.js'
import { signIn, signOut, useSession } from 'next-auth/client'


export default function Home() {
  
  const [ session, loading ] = useSession()
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Dukt Hosting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar brand="Dukt Hosting"></NavBar>

      <main className={styles.main}>
        <h3>
          Welcome to {' '}
        </h3>
        <h1 className={styles.title}>
          Dukt Hosting
        </h1>
        <p className={styles.description}>
          The simple way to deploy your apps.
        </p>
        <div className={styles.grid}>
          <a href="https://panel.dukthosting.net/" className={styles.card}>
            <h3>Panel</h3>
            <p>Do panel shiz here</p>
          </a>
          <a
            href="https://cmpc.live"
            className={styles.card}
          >
            <h3>Go check out cmpc</h3>
            <p>very cool guy agreed.</p>
          </a>
          <a
            href="
            https://google.com"
            className={styles.card}
          >
            <h3>Google your fucking python errors</h3>
            <p>
              Google them before asking us with fucking shit questions
            </p>
            </a>
          <a
            href="
            https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.card}
          >
            <h3>rick</h3>
            <p>
              rick is located here
            </p>
            </a>
        </div>
      </main>
    </div>
  )
}
