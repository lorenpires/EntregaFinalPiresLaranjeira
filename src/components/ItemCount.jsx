/* eslint-disable no-unused-vars */
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ id, nombre, precio, stock, imagen, categoria }) => {
    const [count, setCount] = useState(1);
    const [cambio, setCambio] = useState(true);

    const { cart, setCart, nombresCart, setNombresCart } = useContext(CartContext);
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const addToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id);

            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, cantidad: item.cantidad + count };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { id, cantidad: count, precio, nombre, imagen }];
            }
        });
        toast.success("Añadido al carrito", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,

            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
        console.log(nombre);
        console.log(nombresCart);
        const yaExiste = nombresCart.find((a) => a == nombre);
        nombresCart.length > 0
            ? yaExiste
                ? console.log("ya existe")
                : setNombresCart([...nombresCart, nombre])
            : setNombresCart([nombre]);
        setCambio(false);
    };

    return (
        <>
            {cambio == true ? (
                <div className="d-flex flex-column">
                    <ButtonGroup size="lg" className="mb-2 botonGroup">
                        <Button onClick={decrement} className="boton">
                            -
                        </Button>
                        <Button className="boton">{count}</Button>
                        <Button onClick={increment} className="boton">
                            +
                        </Button>
                    </ButtonGroup>
                    <Button className="boton" onClick={() => addToCart()}>
                        Añadir al carrito
                    </Button>
                </div>
            ) : (
                <div className="">
                    <div className="d-flex flex-column mb-3" style={{ opacity: "0.5" }}>
                        <ButtonGroup size="lg" className="mb-2 botonGroup">
                            <Button className="boton">-</Button>
                            <Button className="boton">{count}</Button>
                            <Button className="boton">+</Button>
                        </ButtonGroup>
                        <Button className="boton">Añadir al carrito</Button>
                    </div>
                    <div className="d-flex flex-row postAñadir">
                        <Link to={`/`}>
                            <Button className="boton me-3">Seguir comprando</Button>
                        </Link>
                        <Link to={"/cart"}>
                            <Button className="boton">Ver Carrito</Button>
                        </Link>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
};
export default ItemCount;
