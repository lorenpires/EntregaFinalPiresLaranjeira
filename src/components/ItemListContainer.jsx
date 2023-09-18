/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Portada from "./img/bannerFinal.jpg";
import { Button } from "react-bootstrap";

const ItemListContainer = () => {
    const { category } = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ ...doc.data() }));
            setProductos(docs);
        });
    }, []);

    const categoriaFiltrada = productos.filter((producto) => producto.categoria === category);

    return (
        <div className="mb-5">
            <div className="mt-3 py-3 banner" style={{ backgroundImage: `url(${Portada})` }}>
                <h1 className="allProducts text-center mx-auto px-3 pb-1">Nuestras camisetas</h1>
            </div>
            {category ? (
                <ItemList productos={categoriaFiltrada} />
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    );
};

export default ItemListContainer;
