import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();
  const [pedidoId, setPedidoId] = useState(null);
  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">
          Muchas gracias por tu compra!.
          <br />
          En breve te llegará un email con los pasos a seguir.{" "}
        </h1>
        <h2>Tu número de pedido es: {pedidoId}</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
          <input
            type="text"
            placeholder="Ingresá tu nombre"
            {...register("nombre")}
          />
          <br />
          <input
            type="email"
            placeholder="Ingresá tu e-mail"
            {...register("email")}
          />
          <br />
          <input
            type="phone"
            placeholder="Ingresá tu teléfono"
            {...register("telefono")}
          />
          <br />
          <button className="enviar" type="submit">
            Comprar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
