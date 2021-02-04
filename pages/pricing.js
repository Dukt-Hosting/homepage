import NavBar from '../componenets/NavBar.js'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { CardDeck, Card, Container } from 'react-bootstrap'

export default function Pricing () {
    return (
      <div className={styles.container}>
        <Head>
            <title>Dukt Hosting</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar brand="Pricing - Dukt Hosting"></NavBar>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Dukt Hosting pricing
            </h1>

            <p className={styles.description}>
                The simple way to deploy your apps.
            </p>

            <Container fluid="lg">
                <CardDeck>
                    <Card>
                        <Card.Body>
                        <Card.Title>Placeholder</Card.Title>
                        <Card.Text>
                          Placeholder
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Placeholder</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Placeholder</Card.Title>
                        <Card.Text>
                            Placeholder
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Placeholder</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Placeholder</Card.Title>
                        <Card.Text>
                            Placeholder
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Placeholder</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </main>
      </div>
    )
}
