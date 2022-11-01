import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, init, onAdd }) => {
  const [count, setCount] = useState(init);

  //agregar producto
  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  //sacar producto
  const handleRemove = () => {
    if (count > init) {
      setCount(count - 1);
    }
  };

  //agregar al carrito
  const handleOnAdd = () => {
    onAdd(count);
  };

  return (
    <div className="mt-5">
      <button onClick={handleAdd} className="btn btn-primary">
        +
      </button>

      <label className="pl-3">{count}</label>

      <button onClick={handleRemove} className="btn btn-primary">
        -
      </button>
      <br />

      <button className="btn btn-success" onClick={handleOnAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
