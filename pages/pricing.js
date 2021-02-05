import NavBar from '../components/NavBar.js'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { CardDeck, Card, Container } from 'react-bootstrap'

export default function Pricing () {
    return (
      <div className={styles.container}>
        <Head>
            <title>Pricing - Dukt</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar brand="Dukt Hosting"></NavBar>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Pricing
            </h1>

            <Container fluid style={{ width: "100%" }}>
                <CardDeck style={{ marginTop: "69px", marginRight: "10%", marginLeft: "10%"}}>
                    <Card style={{backgroundColor: "#292d30" , borderColor:"#eaeaea", padding:"25px"}} >
                        <Card.Body>
                        <Card.Title>Basic Website Hosting</Card.Title>
                        <Card.Text>
                          Static webhosting using NGINX.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Placeholder</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{backgroundColor: "#292d30" , borderColor:"#eaeaea", padding:"25px"}} >
                        <Card.Body>
                        <Card.Title>Script Hosting</Card.Title>
                        <Card.Text>
                            Node.JS, Python, and other language hosting. <br></br>
                            Includes a free PostgreSQL database.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Placeholder</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{backgroundColor: "#292d30" , borderColor:"#eaeaea", padding:"25px"}} >
                        <Card.Body>
                        <Card.Title>Docker Container</Card.Title>
                        <Card.Text>
                            Root access to a private docker container.
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
