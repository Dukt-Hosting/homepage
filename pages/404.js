import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar.js'

function FourOFourPage({ Component, pageProps }) {
  return (
      <div className={styles.container}>
          <Head>
              <title>Home - Dukt Hosting</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar brand="Dukt Hosting"></NavBar>
    
          <Main className={styles.main}>
              <h2>
                  404 | Not Found
              </h2>
          </Main>
      </div>
  )
}

export default FourOFourPage
