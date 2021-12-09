// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount />
    </>
  );
}

export default App;
