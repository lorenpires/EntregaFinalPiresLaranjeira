import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, setCart, totalPrecio, setTotalPrecio } = useContext(CartContext);

    let paso = 0;
    let total = 0;

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
                <Row className="">
                    {cart.length > 0 ? (
                        cart.map((c) => {
                            paso = c.precio * c.cantidad;
                            totalPrecio == 0
                                ? (setTotalPrecio(paso), (total = paso))
                                : ((total = total + paso), setTotalPrecio(total));

                            return (
                                <Col key={c.id}>
                                    <Card className="pt-2 mb-3 cardCart">
                                        <div>
                                            <img src={`${c.imagen}`} className="imagenCart"></img>
                                        </div>
                                        <Card.Body className="pt-2 pb-0">
                                            <Card.Title className="fs-5">{c.nombre}</Card.Title>
                                            <Card.Text>Precio: ${c.precio}</Card.Text>
                                            <Card.Text>Cantidad: {c.cantidad}</Card.Text>
                                        </Card.Body>
                                        <Card.Body className="text-end d-flex justify-content-end">
                                            <Button
                                                variant="dark"
                                                onClick={() => deleteProduct(c.id)}>
                                                Eliminar del carrito
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    ) : (
                        <>
                            <Row>
                                <h2 className="mb-3">No hay productos en el Carrito</h2>
                                <Link to={"/"}>
                                    <Button variant="dark">Volver al inicio</Button>
                                </Link>
                            </Row>
                        </>
                    )}
                    {cart.length > 0 ? (
                        <Container className="mt-5 mb-5 text-center">
                            <Row className="">
                                <Col>
                                    <Button variant="dark" onClick={deleteCart}>
                                        Borrar Carrito
                                    </Button>
                                </Col>
                                <Col>
                                    <h3>Precio total: ${totalPrecio}</h3>
                                </Col>
                                <Col>
                                    <Link to={"/checkout"}>
                                        <Button variant="dark">Checkout</Button>
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
