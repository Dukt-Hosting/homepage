import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar.js'

function ErrorPage({ Component, pageProps }) {
  return (
      <div style={styles.container}>
          <Head>
              <title>Error - Dukt Hosting</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar brand="Dukt Hosting"></NavBar>
    
          <main className={styles.main}>
              <h2>
                  An error occured in your request, try again later.
              </h2>
          </main>
      </div>
  )
}

export default ErrorPage
