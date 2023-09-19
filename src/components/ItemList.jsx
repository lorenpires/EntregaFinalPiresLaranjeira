import { Col, Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <>
            <Container className="mt-3 mt-lg-5">
                <Row className="d-flex justify-content-center justify-content-lg-start">
                    {productos.map((producto) => {
                        return (
                            <Col
                                key={producto.nombre}
                                className="d-flex justify-content-center col-lg-3 col-10">
                                <Item
                                    id={producto.id}
                                    nombre={producto.nombre}
                                    imagen={producto.imagen}
                                    categoria={producto.categoria}
                                    precio={producto.precio}
                                    stock={producto.stock}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};
export default ItemList;
