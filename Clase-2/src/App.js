// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
              <Routes>
                  <Route exact path="/navbar" element={<NavBar />} />
                  <Route exact path="/itemlist" element={<ItemListContainer />} />
                  <Route exact path="/itemcount" element={<ItemCount />} />
              </Routes>
          </BrowserRouter>
  );
}

export default App;
