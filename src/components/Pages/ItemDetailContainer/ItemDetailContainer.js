import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/gFetch";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idProducto } = useParams();
  console.log(idProducto);
  useEffect(() => {
    if (idProducto) {
      gFetch()
        .then((respSgte) =>
          setProductos(
            respSgte.filter((producto) => producto.id === idProducto)
          )
        )
        .catch((err) => console.log(err));
    } else {
      gFetch()
        .then((respSgte) => setProductos(respSgte))
        .catch((err) => console.log(err));
    }
  }, [idProducto]);

  return (
    <>
      <ItemDetail keyProducto={idProducto} productos={productos}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer;
