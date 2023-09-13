/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, setCart, totalPrecio, setTotalPrecio, nombresCart, setNombresCart } =
        useContext(CartContext);

    /* let paso = 0;
    let total = 0; */

    const deleteProduct = (idOut) => {
        const cartNueva = cart.filter((c) => c.id !== idOut);
        setCart(cartNueva);
    };
    const deleteCart = () => {
        setCart([]);
    };
    return (
        <div>
            <Container className="mt-5">
                <h1 style={{ fontWeight: "bold" }} className="mb-3">
                    Tu carrito
                </h1>
                <Row className="">
                    {cart.length > 0 ? (
                        cart.map((c) => {
                            /* paso = c.precio * c.cantidad;
                            totalPrecio == 0
                                ? (setTotalPrecio(paso), (total = paso))
                                : ((total = total + paso), setTotalPrecio(total)); */
                            return (
                                <Col key={c.id} className="d-flex justify-content-center mb-3">
                                    <div className=" mb-3 cardCart rounded-top-4">
                                        <img
                                            className="rounded-top-4 imagenCard"
                                            src={`${c.imagen}`}></img>
                                        <div className="bordeCart rounded-bottom-4 pb-2">
                                            <div className="pt-2 ps-2 pb-0 ">
                                                <div className="text-center">{c.nombre}</div>
                                                <div>
                                                    Precio:{" "}
                                                    <span className="precioCard">${c.precio}</span>
                                                </div>
                                                <div>Cantidad: {c.cantidad}</div>
                                            </div>
                                            <div className="pt-0 pe-3 me-3 text-end d-flex justify-content-end ">
                                                <div className="align-self-end ">
                                                    <Button
                                                        className="boton"
                                                        onClick={() => deleteProduct(c.id)}>
                                                        Eliminar del carrito
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })
                    ) : (
                        <>
                            <Row>
                                <h2 className="mb-3">No hay productos en el Carrito</h2>
                                <Link to={"/"}>
                                    <Button className="boton">Volver al inicio</Button>
                                </Link>
                            </Row>
                        </>
                    )}
                    {cart.length > 0 ? (
                        <Container className="mt-2 mb-5 text-center">
                            <Row className="">
                                <Col>
                                    <Link to={`/`}>
                                        <Button className="boton me-3">Seguir comprando</Button>
                                    </Link>
                                    <Button className="boton" onClick={deleteCart}>
                                        Borrar Carrito
                                    </Button>
                                </Col>
                                <Col>
                                    <h3>Precio total: ${totalPrecio}</h3>
                                </Col>
                                <Col>
                                    <Link to={"/checkout"}>
                                        <Button className="boton">Checkout</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        console.log()
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Cart;
