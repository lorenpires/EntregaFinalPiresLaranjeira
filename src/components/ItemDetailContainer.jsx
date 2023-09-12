import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [camisetas, setCamisetas] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ ...doc.data() }));
            setCamisetas(docs);
        });
    }, []);
    return (
        <div className="mb-5 itemDetail">
            <ItemDetail productos={camisetas} />
        </div>
    );
};

export default ItemDetailContainer;
