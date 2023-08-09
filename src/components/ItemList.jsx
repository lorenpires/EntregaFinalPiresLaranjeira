import { Col, Container, Row } from "react-bootstrap"
import Item from "./Item"

const ItemList = ({ productos }) => {
    return (
        <>
            <Container className="mt-5">
                <Row className="">
                    {productos.map((producto) => {
                        return (
                            <Col key={producto.id}>
                                <Item
                                    id={producto.id}
                                    nombre={producto.nombre}
                                    imagen={producto.imagen}
                                    categoria={producto.categoria}
                                    precio={producto.precio}
                                    stock={producto.stock}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
export default ItemList
