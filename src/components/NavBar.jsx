import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container className="py-2">
                    <Navbar.Brand href="#home" className="fs-2">
                        Futar Store
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ms-2 mt-1 fs-5">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <NavDropdown title="Camisetas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Clubes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Clubes retro</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Selecciones</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Conjuntos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar
