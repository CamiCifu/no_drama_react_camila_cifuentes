import React from "react";
import { useState } from "react";

import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.scss";

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
      <h1 className="detalle_producto ms-5 mt-2">Detalle del producto</h1>
      <div className="col-6">
        <center>
          <img src={producto.foto} alt="" className="w-50" />
          <p className="color_textoProducto">
            Producto:
            <div className="text-uppercase">{producto.nombre}</div>
          </p>
          <p className="color_textoProducto">Precio: $ {producto.precio}</p>
          <p className="color_textoProducto">
            Stock: {producto.stock} unidades
          </p>
          <p className="color_textoProducto">
            Descripción: {producto.descripcion}
          </p>
        </center>
      </div>
      <div className="col-6 mt-5">
        <center>
          {isCount ? (
            <ItemCount onAdd={onAdd} stock={10} init={1} />
          ) : (
            <div>
              <Link to="/cart">
                <button className="btn btn-secondary m-2">
                  Terminar Compra
                </button>
              </Link>
              <Link to="/">
                <button className="btn btn-primary  m-2">
                  Seguir Comprando
                </button>
              </Link>
            </div>
          )}
        </center>
      </div>
    </div>
  );
};
export default ItemDetail;
