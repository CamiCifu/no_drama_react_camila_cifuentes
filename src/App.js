import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Importacion de containers
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CarritoPage from "./components/Pages/CarritoPage/CarritoPage";
import NotFound from "./components/NotFound/NotFound";

//Importacion de context
import CartContextProvider from "./Context/CartContext";
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
import { RevisionCarrito } from "./components/Revisiones/Revisiones";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/cart"
            element={
              <RevisionCarrito>
                <CarritoPage />
              </RevisionCarrito>
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
