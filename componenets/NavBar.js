import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function NavBar(props) {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">{props.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <NavDropdown title="Fax" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Max</NavDropdown.Item>
              <NavDropdown.Item href="#">Is</NavDropdown.Item>
              <NavDropdown.Item href="#">a</NavDropdown.Item>
              <NavDropdown.Item href="#">Bitch</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-primary" href="https://panel.dukthosting.net">Panel</Button>
        </Navbar.Collapse>
      </Navbar>
    )
}
