import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
    const greeting = "Bienvenidos a Futar Store"

    return (
        <>
            <div>
                <NavBar />
                <ItemListContainer greeting={greeting} />
            </div>
        </>
    )
}

export default App
