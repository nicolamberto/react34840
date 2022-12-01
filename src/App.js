import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer texto={"Proop greeting"}/>
    </div>
      
  );
}

export default App;
