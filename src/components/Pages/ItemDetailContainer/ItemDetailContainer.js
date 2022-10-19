import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/gFetch";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productos, setProducto] = useState([]);
  const { idProducto } = useParams();

  console.log(idProducto);

  useEffect(() => {
    if (idProducto) {
      gFetch()
        .then((respSgte) =>
          setProducto(respSgte.find((producto) => producto.id === idProducto))
        )
        .catch((err) => console.log(err));
    } else {
      gFetch()
        .then((respSgte) => setProducto(respSgte))
        .catch((err) => console.log(err));
    }
  }, [idProducto]);

  console.log(productos);

  return (
    <>
      <ItemDetail producto={productos}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer;
