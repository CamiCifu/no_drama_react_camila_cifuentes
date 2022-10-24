import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/gFetch";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { idHola } = useParams();
  console.log(idHola);
  useEffect(() => {
    gFetch(idHola)
      .then((respSgte) =>
        setProducto(respSgte.find((producto) => producto.id == idHola))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idHola]);

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

/*
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

console.log(productos);

return (
  <>
    <ItemDetail producto={producto.id}></ItemDetail>
  </>
);
};
*/
