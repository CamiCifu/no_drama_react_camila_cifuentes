import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importacion de containers
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";

//import de estilos
import "./index.css";
import "./components/NavBar/NavBar.css";
//imports para bootstrap
import "jquery";
import "../node_modules/popper.js/dist/umd/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//imports para react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import CarritoPage from "./components/Pages/CarritoPage/CarritoPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detalle" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CarritoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
