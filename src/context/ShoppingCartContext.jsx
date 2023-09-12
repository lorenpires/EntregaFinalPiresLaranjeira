import { createContext, useState } from "react";

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [nombresCart, setNombresCart] = useState([]);

    const [totalPrecio, setTotalPrecio] = useState(0);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                nombre,
                setApellido,
                setNombre,
                apellido,
                email,
                setEmail,
                setTotalPrecio,
                totalPrecio,
                setPhone,
                phone,
                nombresCart,
                setNombresCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default ShoppingCartProvider;
