import React, { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ productos }) => {
  console.log("ItemList");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      className=" col-md-2"
    >
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
});

export default ItemList;
