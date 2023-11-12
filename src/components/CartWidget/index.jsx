import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <Link className="bi bi-cart2" to="/carrito">
      <span>{cantidadEnCarrito}</span>
    </Link>
  );
};
export default CartWidget;
