import { AiOutlineShoppingCart } from "react-icons/ai"
import { IconContext } from "react-icons"

const CartWidget = () => {
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
                    <p className="numeroCarrito">4</p>
                </div>
            </a>
            ;
        </>
    )
}

export default CartWidget
