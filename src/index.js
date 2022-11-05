import React from "react";
import ReactDOM from "react-dom/client";

//imports para bootstrap

import "jquery";

import "../node_modules/popper.js/dist/umd/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import de estilos
import "./index.css";
import "./components/NavBar/NavBar.css";
//import de js principal llamado App
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { firestoreInit } from "./firebase/config";

firestoreInit();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
