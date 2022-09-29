//import de estilos
import "./index.css";
import "./styles/navbar.css";
//imports para bootstrap

import "jquery";

import "../node_modules/popper.js/dist/umd/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//import { Padre } from "./components/padre";
import { NavBar } from "./components/navbar";
import { MainContent } from "./components/maincontent";
import { Children } from "./children";

function App() {
  return (
    <>
      <NavBar />
      <Children />
    </>
  );
}
export default App;
