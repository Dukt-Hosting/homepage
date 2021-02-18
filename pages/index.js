import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar.js'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dukt Hosting</title>
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
            <p>Access your server here.</p>
          </a>
          <a
            href="https://discord.gg/utqQ8CVeJe"
            className={styles.card}
          >
            <h3>Join our discord</h3>
            <p>Updates and service outages will be posted here.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
