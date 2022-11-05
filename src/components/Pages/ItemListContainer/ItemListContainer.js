import React from "react";
import { useState, useEffect } from "react";

import ItemList from "../../ItemList/ItemList.js";
import { useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();
  console.log(idCategoria);

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    const queryFiltrada = idCategoria
      ? query(queryCollection, where("categoria", "==", idCategoria))
      : queryCollection;
    console.log(idCategoria);
    getDocs(queryFiltrada)
      .then((resp) =>
        setProductos(
          resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idCategoria]);
  console.log(productos);

  console.log(productos);

  console.log("paso 2");

  return (
    <>
      {loading ? (
        <h3 className="text-primary"> Cargando productos ...</h3>
      ) : (
        <ItemList productos={productos}></ItemList>
      )}
    </>
  );
};

export default ItemListContainer;
