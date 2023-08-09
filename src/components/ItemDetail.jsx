import { Col, Container, Row } from "react-bootstrap"
import ItemCount from "./ItemCount"

const ItemDetail = ({ productos }) => {
    return (
        <>
            {productos.map((producto) => {
                return (
                    <Container key={producto.id}>
                        <Row className="mt-5">
                            <Col>{producto.imagen}</Col>

                            <Col>
                                <div className="tituloItem fs-1 pb-2">{producto.nombre}</div>
                                <div className="itemPrecio fs-2 pb-2">${producto.precio}</div>
                                <div className="itemStock fs-2 pb-2">Stock: {producto.stock}</div>
                                <ItemCount stock={producto.stock} />
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </>
    )
}

export default ItemDetail
