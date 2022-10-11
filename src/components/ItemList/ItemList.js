import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  console.log(productos);
  console.log(productos.map((producto) => producto.categoria));

  return (
    <div>
      {productos.map((producto) => (
        <Item
          key={producto.id}
          nombre={producto.nombre}
          categoria={producto.categoria}
          foto={producto.foto}
          precio={producto.precio}
        ></Item>
      ))}
    </div>
  );
};

export default ItemList;
