import { Col, Container, Row } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import fondo from "./img/fondoEstadio.jpg";

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const producto = productos.filter((p) => p.id == id);
    return (
        <div
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            {producto ? (
                producto.map((producto) => {
                    return (
                        <Container key={producto.id}>
                            <Row className="py-lg-5 py-3 ">
                                <Col className="col-12 text-center pe-lg-5 col-lg">
                                    <img
                                        src={`${producto.imagen}`}
                                        className="imagenDetail sombra"></img>
                                </Col>

                                <Col>
                                    <div className="tituloItem pb-2 sombraTexto text-center">
                                        {producto.nombre}
                                    </div>
                                    <div className="datosItem pb-2 sombraTexto">
                                        ${producto.precio}
                                    </div>
                                    <div className="datosItem pb-lg-2 sombraTexto mb-lg-5">
                                        Disponible: {producto.stock}
                                    </div>
                                    <ItemCount
                                        id={producto.id}
                                        nombre={producto.nombre}
                                        precio={producto.precio}
                                        stock={producto.stock}
                                        imagen={producto.imagen}
                                        categoria={producto.categoria}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    );
                })
            ) : (
                <div>Este producto no esta disponible</div>
            )}
        </div>
    );
};

export default ItemDetail;
