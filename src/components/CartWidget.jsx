import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    return (
        <>
            <a href="">
                <IconContext.Provider
                    value={{
                        color: "white",
                        size: "2em",
                        className: "global-class-name",
                    }}>
                    <AiOutlineShoppingCart className="iconoCarrito" />
                </IconContext.Provider>
                <div className="divNumeroCarrito">
                    <p className="numeroCarrito">{cart.length}</p>
                </div>
            </a>
            ;
        </>
    );
};

export default CartWidget;
