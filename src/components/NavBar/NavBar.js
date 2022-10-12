import React from "react";

import CartWidget from "../CarWidget/CartWidget";
//import Container from "react-bootstrap/Container";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";

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
                Camperas
              </a>
              <a className="nav-link" href="/#">
                Mochilas
              </a>
            </div>
          </div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

/*
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
      */

/*
      <NavBar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavBar>
    */
