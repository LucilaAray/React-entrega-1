import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ producto }) => {
  return (
    <div className="d-inline-block mx-2"> 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>
            <p>Categoría: {producto.categoria}</p>
            <br />
            <p>Precio: ${producto.precio}</p>
          </Card.Text>
          <Button variant="primary">
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;


