import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
const CartWidget = () => {
  const { cantidadTotal } = useCartContext();
  return (
    <Link to="/cart">
      {cantidadTotal() != 0 && cantidadTotal()}
      <img
        src="carrito.png"
        alt=""
        className="d-inline-block align-text-top justify-content-end"
      ></img>
    </Link>
  );
};
export default CartWidget;
