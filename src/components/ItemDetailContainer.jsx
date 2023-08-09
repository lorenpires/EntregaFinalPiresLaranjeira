import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Barcelona from "./img/Camiseta Barcelona Titular 23-24.jpg"
import RealMadrid from "./img/Camiseta Real Madrid Titular 23-24.jpg"
import Milan from "./img/Camiseta Milan Titular 06-07.jpg"
import Argentina from "./img/Camiseta Argentina Tres Estrellas Titular.jpg"
import Flamengo from "./img/Campera Flamengo Negra.jpg"
const ItemDetailContainer = () => {
    const productos = [
        {
            id: 0,
            nombre: "Camiseta Barcelona Titular 23-24",
            imagen: <img src={Barcelona} alt="foto" width={"730px"} />,
            precio: 20000,
            categoria: "clubes",
            stock: 5,
        },
        {
            id: 1,
            nombre: "Camiseta Real Madrid Titular 23-24",
            imagen: <img src={RealMadrid} alt="foto" width={"730px"} />,
            categoria: "clubes",
            precio: 20000,
            stock: 6,
        },
        {
            id: 2,
            nombre: "Camiseta Milan Titular 06-07",
            imagen: <img src={Milan} alt="foto" width={"730px"} />,
            categoria: "clubesRetro",
            precio: 20000,
            stock: 4,
        },
        {
            id: 3,
            nombre: "Camiseta Argentina Tres Estrellas Titular",
            imagen: <img src={Argentina} alt="foto" width={"730px"} />,
            categoria: "selecciones",
            precio: 20000,
            stock: 8,
        },
        {
            id: 4,
            nombre: "Campera Flamengo Negra",
            imagen: <img src={Flamengo} alt="foto" width={"730px"} />,
            categoria: "camperas",
            precio: 40000,
            stock: 2,
        },
    ]

    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(new Error("No hay datos"))
        }
    })

    getProductos
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })

    const { id } = useParams()
    const itemFiltrado = productos.filter((producto) => producto.id == id)
    return (
        <div>
            <ItemDetail productos={itemFiltrado} />
        </div>
    )
}

export default ItemDetailContainer
