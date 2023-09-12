/* eslint-disable no-unused-vars */
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button, Container } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
const SendOrder = () => {
    const { nombre, apellido, email, totalPrecio, cart, phone, nombresCart } =
        useContext(CartContext);

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
        productos: nombresCart,
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
                                        </div>
                                    </div>
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
