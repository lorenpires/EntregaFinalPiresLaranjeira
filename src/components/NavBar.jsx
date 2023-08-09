import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container className="py-2">
                    <Link className="LinkNavbar" to={"/"}>
                        <Navbar.Brand className="fs-2">Futar Store</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ms-2 mt-1 fs-5">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link className="LinkNavbar" to={"/"}>
                                    Inicio
                                </Link>
                            </Nav.Link>
                            <NavDropdown title="Camisetas" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link className="LinkNavbar" to={`/category/clubes`}>
                                        Clubes
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="LinkNavbar" to={`/category/clubesRetro`}>
                                        Clubes retro
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="LinkNavbar" to={`/category/selecciones`}>
                                        Selecciones
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link className="LinkNavbar" to={`/category/camperas`}>
                                        Camperas
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className="LinkNavbar" to={"/Cart"}>
                        <CartWidget />
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar
