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

        <NavBar brand="Dukt Hosting"></NavBar>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to Dukt Hosting
            </h1>

            <p className={styles.description}>
                The simple way to deploy your apps.
            </p>

            <Container fluid="lg">
                <CardDeck>
                    <Card>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </main>
      </div>
    )
}