import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar.js'

function FourOFourPage({ Component, pageProps }) {
  return (
      <div className={styles.container}>
          <Head>
              <title>404 - Dukt Hosting</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar brand="Dukt Hosting"></NavBar>
    
          <main className={styles.main}>
              <h2>
                  404 | Not Found
              </h2>
          </main>
      </div>
  )
}

export default FourOFourPage
