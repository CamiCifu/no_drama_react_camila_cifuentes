import React from "react";
import { useState, useEffect } from "react";

import ItemList from "../../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
//mport { gFetch } from "../../../helpers/gFetch.js";

//import de firebase
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();
  console.log(idCategoria);

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    const queryFiltrada = idCategoria
      ? query(queryCollection, where("categoria", "==", idCategoria))
      : queryCollection;
    console.log(idCategoria);
    getDocs(queryFiltrada)
      .then((resp) =>
        setProductos(
          resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idCategoria]);
  console.log(productos);

  /*useEffect(() => {
    if (idCategoria) {
      gFetch()
        .then((respSgte) =>
          setProductos(
            respSgte.filter((producto) => producto.category === idCategoria)
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((respSgte) => setProductos(respSgte))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);*/

  console.log(productos);
  //declaro hooks para tener estado inicial y luego actualización, concepto re-render
  //const [cont, setCont] = useState(0);
  //const [fecha, setFecha] = useState(Date());

  /*
  //useeffect es una funcion que recibe una call back de parametro
  useEffect(() => {
    //aca van todas las acciones que queremos que se ejecuten
    console.log("paso 1");
  }, []);*/

  //useeffect es una funcion que recibe una call back de parametro
  //state booleano
  //const [bool, setBool] = useState(true);
  // useEffect(() => {
  //aca van todas las acciones que queremos que se ejecuten
  // console.log("paso 1");
  // }, [bool]);
  // si agrego un return al useEffect sirve para borrar, para sacar ( se ve en la lase 2 de componentes minuto 1.50)

  //const handleClick = () => {
  //setCont(cont + 1);
  // setFecha(Date());
  //};

  console.log("paso 2");

  return (
    <>
      {/*<div> {cont}</div>*/}
      {/*<div> {fecha}</div>*/}
      {/*<<button onClick={handleClick}>Click</button>*/}
      {/*<<button onClick={() => setBool(!bool)}>Bool</button>*/}
      {loading ? (
        <h3 className="text-primary"> Cargando productos ...</h3>
      ) : (
        <ItemList productos={productos}></ItemList>
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
