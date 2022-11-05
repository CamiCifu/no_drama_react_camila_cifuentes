import React from "react";
import { useState } from "react";

import ItemCount from "../ItemCount/ItemCount";

import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext.js";

const ItemDetail = ({ producto }) => {
  const [isCount, setIsCount] = useState(true);
  const { addItem, cartList } = useCartContext();
  const onAdd = (cantidad) => {
    console.log("onAdd", cantidad);
    addItem({ ...producto, cantidad });
    setIsCount(false);
  };
  console.log(cartList);
  return (
    <div className="row">
      <h1>ItemDetailContainer</h1>
      <div className="col-6">
        <center>
          <img src={producto.foto} alt="" className="w-50" />
          <p>Producto: {producto.nombre}</p>
          <p>Precio: {producto.precio}</p>
          <p>Stock: {producto.stock}</p>
          <p>Descripción: {producto.descripcion}</p>
        </center>
      </div>
      <div className="col-6 mt-5">
        <center>
          {isCount ? (
            <ItemCount onAdd={onAdd} stock={10} init={1} />
          ) : (
            <div>
              <Link to="/cart">
                <button className="btn btn-primary">Terminar Compra</button>
              </Link>
              <Link to="/">
                <button className="btn btn-primary">Seguir Comprando</button>
              </Link>
            </div>
          )}
        </center>
      </div>
    </div>
  );
};
export default ItemDetail;
