import './App.css'; 
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideA from './components/SideA';
import NavBarSearch from './components/NavBarSearch';

function App() {

  return (
    <BrowserRouter>

    <NavBarSearch/>
<Routes>
  <Route path= "/" element={<SideA/> }/>
  <Route path= "/inicio" element={<SideA/> }/>
  <Route path= "/productos" element={<ItemListContainer/> }/>
  <Route path= "/item/:id" element={<ItemDetailContainer /> }/>
  <Route path= "/productos/:categoria" element={<ItemListContainer/> }/>
</Routes>
  


    </BrowserRouter>

  );
}

export default App;




