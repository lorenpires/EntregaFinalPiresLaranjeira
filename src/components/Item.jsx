import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <>
            <Card className="pt-2 mb-3 ">
                <img src={`${imagen}`}></img>
                <Card.Body className="pt-2 pb-0">
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>Precio: ${precio}</Card.Text>
                </Card.Body>
                <Card.Body className="pt-0 me-3 text-end d-flex justify-content-end">
                    <Card.Link className="align-self-end">
                        <Link
                            to={`/item/${id}`}
                            style={{
                                fontWeight: "bold",
                            }}
                            className="text-dark ">
                            Detalles
                        </Link>
                    </Card.Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Item;
