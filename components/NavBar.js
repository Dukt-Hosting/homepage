import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function NavBar(props) {
    return(
      <Navbar nav expand="lg" width="full" bg="dark" variant="dark">
        <Navbar.Brand href="/">{props.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="outline-primary" href="https://panel.dukthosting.net">Panel</Button>
        </Navbar.Collapse>
      </Navbar>
    )
}
