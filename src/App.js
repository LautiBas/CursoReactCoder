import logo from './logo.svg';
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import Prendas from "./components/Prendas"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/detalle/:itemid' element={<ItemDetailContainer/>} />
    <Route path='/category/:categoryid' element={<ItemListContainer/>} />
    <Route path='*' element={<h2>Pagina no encontrada</h2>} />
    </Routes>
    </BrowserRouter>
);
}



export default App;
