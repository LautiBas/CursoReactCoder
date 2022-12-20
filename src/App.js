import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
    <div>
      <ItemListContainer greeting="Bienvenido a mi primer web con React"></ItemListContainer>
    </div>
    </div>

);
}



export default App;
