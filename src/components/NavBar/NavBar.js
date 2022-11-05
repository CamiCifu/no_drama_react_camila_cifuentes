import React from "react";
import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
//import Container from "react-bootstrap/Container";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";

//imporación de estilos
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
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
                <Link to="/categoria/camperas" className="text-white">
                  {" "}
                  Camperas{" "}
                </Link>
              </li>
              <li>
                <Link to="/categoria/mochilas" className="text-white">
                  {" "}
                  Mochilas
                </Link>
              </li>
            </ul>
          </div>

          <CartWidget />
        </div>
      </nav>
    </>
  );
};

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
