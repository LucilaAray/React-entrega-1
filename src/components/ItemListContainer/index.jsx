import React, { useState, useEffect } from "react";
import Title from "../Title";
import { pedirProductos } from "../../js/pedirProductos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const categoria = useParams().categoria;
  const [tituloCategoria, setTituloCategoria] = useState("Productos");

  useEffect(() => {
    const productosRef = collection(db, "Productos");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;
    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setIsLoading(false);
      });
  }, [categoria]);

  return (
    <div>
      <Title greeting={`${tituloCategoria}`} /> {}
      {isLoading ? <Spinner /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
