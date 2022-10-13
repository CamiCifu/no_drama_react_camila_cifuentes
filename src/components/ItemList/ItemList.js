import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  console.log(productos);
  console.log(productos.map((producto) => producto.category));

  return (
    <div>
      {productos.map((producto) => (
        <Item producto={producto}></Item>
      ))}
    </div>
  );
};

export default ItemList;
