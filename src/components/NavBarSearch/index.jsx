import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget";
import Carrito from "../Carrito";

const NavBarSearch = () => {
  return (
    <Navbar expand="lg" className="bg-nav">
      <Container fluid>
        <Link to="/" className="navbar-brand" style={{ fontSize: "24px" }}>
          0800
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item className="nav-item">
              <Link to="/" className="nav-link" style={{ fontSize: "18px" }}>
                Inicio
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                to="/productos"
                className="nav-link"
                style={{ fontSize: "18px" }}
              >
                Productos
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                to="/productos/notebooks"
                className="nav-link"
                style={{ fontSize: "18px" }}
              >
                Notebooks
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                to="/productos/perifericos"
                className="nav-link"
                style={{ fontSize: "18px" }}
              >
                Perifericos
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                to="/productos/accesorios"
                className="nav-link"
                style={{ fontSize: "18px" }}
              >
                Accesorios
              </Link>
            </Nav.Item>
          </Nav>

          <Nav.Link to="/action3" className="me-2">
            <CartWidget />
          </Nav.Link>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSearch;
