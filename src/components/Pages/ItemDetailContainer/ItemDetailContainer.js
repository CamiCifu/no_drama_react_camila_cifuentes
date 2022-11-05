import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();
  console.log(idProducto);

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", idProducto);
    getDoc(queryDoc)
      .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idProducto]);

  console.log(producto);
  console.log(typeof producto);

  return (
    <>
      {loading ? (
        <h2> Cargando producto ...</h2>
      ) : (
        <ItemDetail producto={producto}></ItemDetail>
      )}
    </>
  );
};

export default ItemDetailContainer;
