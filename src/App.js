import React from "react";

//import de estilos
import "./index.css";
import "./components/NavBar/NavBar.css";
//imports para bootstrap
import "jquery";
import "../node_modules/popper.js/dist/umd/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//Importacion de containers
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}
export default App;
