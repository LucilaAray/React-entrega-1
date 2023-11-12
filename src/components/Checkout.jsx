import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
  };
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
          <input
            type="email"
            placeholder="Ingresá tu e-mail"
            {...register("email")}
          />
          <input
            type="phone"
            placeholder="Ingresá tu teléfono"
            {...register("telefono")}
          />

          <button className="enviar" type="submit">
            Comprar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
