import React from "react";
import ReactDOM from "react-dom/client";

//imports para bootstrap

import "jquery";

import "../node_modules/popper.js/dist/umd/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import de estilos
import "./index.css";
import "./styles/navbar.css";
//import de js principal llamado App
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
