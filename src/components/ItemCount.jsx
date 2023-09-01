/* eslint-disable no-unused-vars */
import { Button, ButtonGroup } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ id, nombre, precio, stock, imagen }) => {
    const [count, setCount] = useState(1);

    const { cart, setCart } = useContext(CartContext);
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
    };

    return (
        <>
            <div className="d-flex flex-column">
                <ButtonGroup size="lg" className="mb-2 ">
                    <Button onClick={decrement} variant="dark">
                        -
                    </Button>
                    <Button variant="dark">{count}</Button>
                    <Button onClick={increment} variant="dark">
                        +
                    </Button>
                </ButtonGroup>
                <Button variant="dark" onClick={() => addToCart()}>
                    Añadir al carrito
                </Button>
            </div>
        </>
    );
};
export default ItemCount;
