/* eslint-disable no-unused-vars */
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button, Container } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
const SendOrder = () => {
    const { nombre, apellido, email, totalPrecio, cart, phone } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");
    const [mostrarDatos, setMostrarDatos] = useState(false);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        setMostrarDatos(true);
    };

    const order = {
        buyer: { nombre: nombre, apellido: apellido, email: email, phone: phone },
        precio: totalPrecio,
    };

    const ordersCollection = collection(db, "orden");
    return (
        <div>
            {mostrarDatos == true ? (
                <Container className="mb-5">
                    <Row className="detallesCompra mt-5 text-center">
                        <h2>Detalles de la compra</h2>
                        <h4>Precio final: ${totalPrecio}</h4>
                        <h4 className="mb-5">Numero de Orden: {orderId}</h4>
                        {cart.map((c) => {
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
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            ) : (
                <Button variant="dark" className="mt-5 fs-3 recibirOrden" onClick={handleSubmit}>
                    Recibir orden
                </Button>
            )}
        </div>
    );
};

export default SendOrder;
