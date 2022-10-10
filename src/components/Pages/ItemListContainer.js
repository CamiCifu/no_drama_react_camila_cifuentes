import React from "react";
import { useState, useEffect } from "react";
import { MainContent } from "../MainContent.js";
import { gFetch } from "../../helpers/gFetch";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    gFetch()
      .then((respSgte) => setProductos(respSgte))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(productos);
  //declaro hooks para tener estado inicial y luego actualización, concepto re-render
  const [cont, setCont] = useState(0);
  const [fecha, setFecha] = useState(Date());

  /*
  //useeffect es una funcion que recibe una call back de parametro
  useEffect(() => {
    //aca van todas las acciones que queremos que se ejecuten
    console.log("paso 1");
  }, []);*/

  //useeffect es una funcion que recibe una call back de parametro
  //state booleano
  const [bool, setBool] = useState(true);
  useEffect(() => {
    //aca van todas las acciones que queremos que se ejecuten
    console.log("paso 1");
  }, [bool]);
  // si agrego un return al useEffect sirve para borrar, para sacar ( se ve en la lase 2 de componentes minuto 1.50)

  const handleClick = () => {
    setCont(cont + 1);
    setFecha(Date());
  };

  console.log("paso 2");

  return (
    <>
      <MainContent titulo={"Acá ira el contenido"}></MainContent>
      <div> {cont}</div>
      <div> {fecha}</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => setBool(!bool)}>Bool</button>
      {loading ? (
        <h2> Cargando productos ...</h2>
      ) : (
        productos.map((producto) => (
          <div
            key={producto.id}
            style={{ marginLeft: 100 }}
            className="col-md-3"
          >
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
        ))
      )}
    </>
  );
};

export default ItemListContainer;

// Primer ejemplo de card agarrando info de array de objetos
/*
  return (
    <>
      <MainContent titulo={"Acá ira el contenido"}></MainContent>
      <div> {cont}</div>
      <div> {fecha}</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => setBool(!bool)}>Bool</button>
      {loading ? (
        <h2> Cargando productos ...</h2>
      ) : (
        productos.map((producto) => (
          <li key={producto.id}> {producto.name} </li>
        ))
      )}
    </>
  );
};
*/
