import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  console.log(producto);
  return;
  /*
    <div className="row">
      <h1>Detalle del Item</h1>
      <div className="col-6">
        <p>{producto.nombre}</p>
        <p>{producto.precio}</p>
        <p>{producto.stock}</p>
        <ItemCount></ItemCount>
      </div>
    </div>
    */
};

export default ItemDetail;
