import React from "react";
import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
//import Container from "react-bootstrap/Container";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";

//import "../NavBar/NavBar.css";
import "../NavBar/NavBar.scss";

export const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-style">
        <div className="container-fluid">
          <Link to="/" className="text-white">
            <img
              src="carablanca.png"
              alt=""
              className="d-inline-block align-middle"
            ></img>
            No Drama
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav text-white">
              <li>
                <Link
                  to="/categoria/camperas"
                  className="text-white nav-item fw-bolder px-2"
                >
                  {" "}
                  Camperas{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/categoria/mochilas"
                  className="text-white nav-item fw-bolder px-2"
                >
                  {" "}
                  Mochilas
                </Link>
              </li>
            </ul>
          </div>

          <CartWidget />
        </div>
      </nav>
    </header>
  );
};
