import React, { memo } from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  console.log(productos);
  console.log(productos.map((producto) => producto.categoria));

  return (
    <div>
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id}></Item>
      ))}
    </div>
  );
};

export default ItemList;
