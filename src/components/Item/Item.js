import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={`/detalle/${producto.id}`}>
      <div key={producto.id} style={{ marginLeft: 100 }} className="col-md-3">
        <div className="card w-100 mt-5">
          <div className="card-header">{`${producto.nombre} - ${producto.category}`}</div>
          <div className="card-body">
            <img src={producto.foto} alt="" className="w-50" />
            {producto.precio}
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </Link>
  );
};
export default Item;

/* {productos.map => (producto =>
                      <div key={producto.id} style={{ marginLeft: 100 }} className="col-md-3">
                      <div className="card w-100 mt-5">
                        <div className="card-header">
                          {`${producto.nombre} - ${producto.categoria}`}
                        </div>
                        <div className="card-body">
                          <img src={producto.foto} alt="" className="w-50" />
                          {producto.precio}
                        </div>
                        <div className="card-footer">
                          <button className="btn btn-outline-primary btn-black">
                            detalle del producto
                          </button>
                        </div>
                      </div>
                    </div>
)}*/
