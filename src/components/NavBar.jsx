/* eslint-disable no-unused-vars */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "./img/LogoLineas.png";
import { useContext } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { CartContext } from "../context/ShoppingCartContext";
import { IconContext } from "react-icons";
import { BsTrash3Fill } from "react-icons/bs";

const NavBar = () => {
    const { cart, setCart, totalPrecio, setTotalPrecio } = useContext(CartContext);

    let paso = 0;
    let total = 0;

    const deleteProduct = (idOut, pasoOut) => {
        let subTotal = totalPrecio - pasoOut;
        setTotalPrecio(subTotal);
        const cartNueva = cart.filter((c) => c.id !== idOut);
        setCart(cartNueva);
    };

    return (
        <>
            <Navbar className="sticky-top" expand="lg" bg="dark" data-bs-theme="dark">
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

                    <Dropdown className="menuCarrito">
                        <Dropdown.Toggle id="dropdown-basic">
                            <CartWidget />
                        </Dropdown.Toggle>
                        {cart.length == 0 ? (
                            <Dropdown.Menu
                                className="menuDesplegable py-3 fs-5 text-center"
                                align="end">
                                <div>No hay productos en el Carrito</div>
                            </Dropdown.Menu>
                        ) : (
                            <Dropdown.Menu
                                className="menuDesplegable "
                                align="end"
                                style={{ overflowY: "scroll" }}>
                                {cart.map((p) => {
                                    paso = p.precio * p.cantidad;
                                    totalPrecio == 0
                                        ? (setTotalPrecio(paso), (total = paso))
                                        : ((total = total + paso), setTotalPrecio(total));
                                    return (
                                        <div key={p.id} className="productoMenu">
                                            <div className="pt-2 ps-2 pb-0 ">
                                                <div className="text-center nombreCamisetaDesplegable">
                                                    {p.nombre}
                                                </div>
                                                <div>
                                                    Precio:{" "}
                                                    <span className="precioCard">${p.precio}</span>
                                                </div>
                                                <div>Cantidad:{p.cantidad}</div>
                                            </div>
                                            <IconContext.Provider
                                                value={{
                                                    color: "grey",
                                                    size: "1.4em",
                                                    className: "global-class-name deleteMenu",
                                                }}>
                                                <BsTrash3Fill
                                                    onClick={() => deleteProduct(p.id, paso)}
                                                />
                                            </IconContext.Provider>
                                            <hr style={{ marginBottom: "2px" }} />
                                        </div>
                                    );
                                })}
                                <div className="fs-5 text-end mt-3 me-4 subtotalMenu">
                                    Subtotal: ${totalPrecio}
                                </div>
                                <Link
                                    to={"/cart"}
                                    style={{ textDecoration: "none" }}
                                    className="d-flex justify-content-center mb-2">
                                    <Button className="boton mt-3 ">Ver carrito</Button>
                                </Link>
                            </Dropdown.Menu>
                        )}
                    </Dropdown>
                </Container>
            </Navbar>
        </>
    );
};
export default NavBar;
