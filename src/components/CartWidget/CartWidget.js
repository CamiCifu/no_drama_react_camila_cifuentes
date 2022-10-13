import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <img
        src="carrito.png"
        alt=""
        className="d-inline-block align-text-top justify-content-end"
      ></img>
    </Link>
  );
};
export default CartWidget;
