import React from "react";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  return (
    <div className="row">
      <h1>ItemDetailContainer</h1>
      <div className="col-6">
        <img src={producto.foto} alt="" className="w-50" />
        <p>{producto.name}</p>
        <p>{producto.price}</p>
        <p>{producto.stock}</p>
      </div>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
