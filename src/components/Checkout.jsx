/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { Container, Row, Col, Button, Form, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";

const Checkout = () => {
    const { email, setEmail, setApellido, setNombre, setPhone, cart, totalPrecio } =
        useContext(CartContext);
    const [confirmacion, setConfirmacion] = useState("");
    const [show, setShow] = useState(false);
    const [enviar, setEnviar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        email === confirmacion
            ? (setEnviar(true), setShow(false))
            : (setShow(true), setEnviar(false));
    };
    return (
        <>
            <Container className="px-auto">
                <Row>
                    <Col className="col-7">
                        <form onSubmit={handleSubmit}>
                            <Row /* style={{ minWidth: "100%" }} */>
                                <Col className="col  mt-3">
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            required
                                            id="floatingInputCustom"
                                            type="text"
                                            placeholder="name@example.com"
                                            onChange={(e) => setNombre(e.target.value)}
                                        />
                                        <label htmlFor="floatingInputCustom">Nombre</label>
                                    </Form.Floating>
                                </Col>
                                <Col className="col  mt-3">
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            required
                                            id="floatingInputCustom"
                                            type="text"
                                            placeholder="name@example.com"
                                            onChange={(e) => setApellido(e.target.value)}
                                        />
                                        <label htmlFor="floatingInputCustom">Apellido</label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col  mt-3">
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            required
                                            id="floatingInputCustom"
                                            type="number"
                                            step="disable"
                                            placeholder="name@example.com"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <label htmlFor="floatingInputCustom">
                                            Numero de contacto
                                        </label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col  mt-3">
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            required
                                            id="floatingInputCustom"
                                            type="email"
                                            placeholder="name@example.com"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="floatingInputCustom">
                                            Correo Electronico
                                        </label>
                                    </Form.Floating>
                                </Col>
                                <Col className="col  mt-3">
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            required
                                            id="floatingInputCustom"
                                            type="email"
                                            placeholder="name@example.com"
                                            onChange={(e) => setConfirmacion(e.target.value)}
                                        />
                                        <label htmlFor="floatingInputCustom">
                                            Confirmacion Correo Electronico
                                        </label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                            <Button type="submit" variant="dark">
                                Confirmar Compra
                            </Button>
                        </form>
                        <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            autohide
                            className="p-2 fs-5 mt-1 mx-auto">
                            <Toast.Body>El Correo Electrónico no coincide</Toast.Body>
                        </Toast>
                        <Toast
                            onClose={() => setEnviar(false)}
                            show={enviar}
                            delay={3000}
                            className="p-2 fs-5 mt-1 mx-auto text-center">
                            <Toast.Header>La verificacion fue completada </Toast.Header>
                            <Toast.Body>Desea continuar?</Toast.Body>
                            <Link to={"/sendorder"} className="d-flex justify-content-center">
                                <Button
                                    style={{ textDecoration: "none" }}
                                    className="botonConfirmar">
                                    Confirmar
                                </Button>
                            </Link>
                        </Toast>
                    </Col>
                    <Col className="col-5" style={{ maxHeight: "550px", overflowY: "scroll" }}>
                        {cart.map((p) => {
                            return (
                                <div key={p.id} className="pt-2 ps-2 pb-0 ">
                                    <div className="text-center nombreCamisetaDesplegable">
                                        {p.nombre}
                                    </div>
                                    <div>
                                        Precio: <span className="precioCard">${p.precio}</span>
                                    </div>
                                    <div>Cantidad:{p.cantidad}</div>
                                    <hr style={{ marginBottom: "2px" }} />
                                </div>
                            );
                        })}
                        <div className="fs-5 text-end mt-3 me-4 mb-4 subtotalMenu">
                            Subtotal: ${totalPrecio}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Checkout;
