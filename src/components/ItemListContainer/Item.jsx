import { Link } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ producto }) => {
  return (
    <div className="d-inline-block mx-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>
            <span>Categoría: {producto.categoria}</span>
            <br />
            <span>Precio: ${producto.precio}</span>
          </Card.Text>
          <Button variant="primary">
            <Link
              className="ver-mas"
              to={`/item/${producto.id}`}
              style={{ color: "white" }}
            >
              Ver más
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
