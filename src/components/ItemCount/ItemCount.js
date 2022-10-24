import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, init, onAdd }) => {
  const [count, setCount] = useState(init);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleRemove = () => {
    if (count > init) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(count);
  };

  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <br />
      <p>{count}</p>
      <br />
      <button onClick={handleRemove}>-</button>
      <br />
      <button onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
