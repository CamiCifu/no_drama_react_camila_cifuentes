import React from "react";
import { Link } from "react-router-dom";
import "../Item/Item.scss";

const Item = ({ producto }) => {
  console.log(producto);
  return (
    <Link to={`/detalle/${producto.id}`}>
      <div key={producto.id} style={{ marginLeft: 100 }} className="col-md-6">
        <div className=" card d-flex  p-2 w-18 mt-10 mb-10 ">
          <img src={producto.foto} alt="" className="w-50 card-img-top" />{" "}
          <div class="card-body justify-content-center">
            <div className="card-title">{`${producto.nombre} - ${producto.categoria}`}</div>
            <div className="card-text">{producto.precio}</div>
            <div className="card-footer"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
