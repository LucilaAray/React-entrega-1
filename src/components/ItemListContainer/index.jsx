import React, { useState, useEffect } from 'react';
import Title from '../Title';
import { pedirProductos } from '../../js/pedirProductos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  const [tituloCategoria, setTituloCategoria] = useState('Productos');

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
          setTituloCategoria(categoria);
        } else {
          setProductos(res);
          setTituloCategoria('Productos');
        }
      });
  }, [categoria]);

  return (
    <div>
      <Title greeting={`${tituloCategoria}`} /> {}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
