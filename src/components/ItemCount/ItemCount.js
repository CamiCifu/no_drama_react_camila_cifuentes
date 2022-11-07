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
    <div className="mt-5 text-center ">
      <div>
        <button onClick={handleRemove} className="btn btn-primary ms-3">
          -
        </button>

        <label className="pl-3 ms-3"> {count} </label>

        <button onClick={handleAdd} className="btn btn-primary ms-3">
          +
        </button>
        <br />
      </div>
      <div>
        <button className="btn btn-success mt-3" onClick={handleOnAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
