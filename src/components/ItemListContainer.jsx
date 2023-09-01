/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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
            <h1 className="allProducts text-center mt-3 py-3">Nuestra camisetas</h1>
            {category ? (
                <ItemList productos={categoriaFiltrada} />
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    );
};

export default ItemListContainer;
