import { Col, Container, Row } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const producto = productos.filter((p) => p.id == id);
    return (
        <>
            {producto ? (
                producto.map((producto) => {
                    return (
                        <Container key={producto.id}>
                            <Row className="mt-5">
                                <Col>
                                    <img src={`${producto.imagen}`} className="imagenDetail"></img>
                                </Col>

                                <Col>
                                    <div className="tituloItem fs-1 pb-2">{producto.nombre}</div>
                                    <div className="itemPrecio fs-2 pb-2">${producto.precio}</div>
                                    <div className="itemStock fs-2 pb-2">
                                        Stock: {producto.stock}
                                    </div>
                                    <ItemCount
                                        id={producto.id}
                                        nombre={producto.nombre}
                                        precio={producto.precio}
                                        stock={producto.stock}
                                        imagen={producto.imagen}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    );
                })
            ) : (
                <div>Este producto no esta disponible</div>
            )}
        </>
    );
};

export default ItemDetail;
