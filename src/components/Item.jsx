import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <>
            <Card>
                {imagen}
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>Precio: ${precio}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link>
                        <Link to={`/item/${id}`}>Detalles</Link>
                    </Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item
