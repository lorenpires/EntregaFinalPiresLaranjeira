import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <>
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/category/:category" element={<ItemListContainer />} />
                        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
