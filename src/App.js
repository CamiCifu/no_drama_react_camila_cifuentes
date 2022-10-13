import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Importacion de containers
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CarritoPage from "./components/Pages/CarritoPage/CarritoPage";
import NotFound from "./components/NotFound/NotFound";

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

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CarritoPage />} />
        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
