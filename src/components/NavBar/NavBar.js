import React from "react";

import { CartWidget } from "../CartWidget";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img
              src="carablanca.png"
              alt=""
              className="d-inline-block align-text-top"
            ></img>
            No Drama
          </a>

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
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/#">
                Remeras
              </a>
              <a className="nav-link" href="/#">
                Mochilas
              </a>
              <a className="nav-link" href="/#">
                Buzos
              </a>
              <a className="nav-link" href="/#">
                Otros
              </a>
            </div>
          </div>

          <CartWidget />
        </div>
      </nav>
    </>
  );
};
