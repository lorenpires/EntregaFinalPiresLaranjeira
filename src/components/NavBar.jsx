import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "./img/LogoLineas.png";
const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container className="py-2">
                    <Link className="LinkNavbar" to={"/"}>
                        <Navbar.Brand className="fs-1 Titulo">
                            <img src={logo} alt="logo" className="logo me-3" />
                            Futar Store
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ms-2 mt-1 ">
                        <Nav className="me-auto  ">
                            <NavDropdown
                                title="Camisetas"
                                className="ms-3 mb-2 text-white categoriasNavBar fs-4"
                                id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link className="LinkNavbar fs-5" to={`/category/clubes`}>
                                        Clubes
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="LinkNavbar fs-5" to={`/category/clubesRetro`}>
                                        Clubes retro
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="LinkNavbar fs-5" to={`/category/selecciones`}>
                                        Selecciones
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
    );
};
export default NavBar;
