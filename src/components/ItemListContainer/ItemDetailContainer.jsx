import { useEffect, useState } from "react";
import { pedirItemPorId } from "../../js/pedirProductos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "Productos", id);
    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
