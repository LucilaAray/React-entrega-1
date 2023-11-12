import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideA from "./components/SideA";
import NavBarSearch from "./components/NavBarSearch";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBarSearch />
          <Routes>
            <Route path="/" element={<SideA />} />
            <Route path="/inicio" element={<SideA />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
