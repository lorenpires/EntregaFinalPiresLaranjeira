import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <>
            <div className=" mb-3 Card rounded-top-4 hvr-grow-shadow">
                <img className="rounded-top-4 imagenCard" src={`${imagen}`}></img>
                <div className="bordeCard rounded-bottom-4 pb-2">
                    <div className="pt-2 ps-2 pb-0 ">
                        <div>{nombre}</div>
                        <div>
                            Precio: <span className="precioCard">${precio}</span>
                        </div>
                    </div>
                    <div className="pt-0 pe-3 me-3 text-end d-flex justify-content-end ">
                        <div className="align-self-end ">
                            <Link
                                to={`/item/${id}`}
                                style={{
                                    fontWeight: "bold",
                                    textDecoration: "none",
                                }}
                                className="text-dark detalles">
                                Ver producto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;
