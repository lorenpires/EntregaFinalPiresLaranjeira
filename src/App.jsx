import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartContext from "./context/ShoppingCartContext";
import Checkout from "./components/Checkout";
import SendOrder from "./components/SendOrder";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <div>
                <BrowserRouter>
                    <ShoppingCartContext>
                        <NavBar />
                        {loading ? (
                            <Loading />
                        ) : (
                            <Routes>
                                <Route exact path="/" element={<ItemListContainer />} />
                                <Route exact path="/cart" element={<Cart />} />
                                <Route
                                    exact
                                    path="/category/:category"
                                    element={<ItemListContainer />}
                                />
                                <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                                <Route exact path="/checkout" element={<Checkout />} />
                                <Route exact path="/sendorder" element={<SendOrder />} />
                            </Routes>
                        )}
                    </ShoppingCartContext>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;
