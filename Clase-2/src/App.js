// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer';


function App() {
  return (

    <BrowserRouter>
      <NavBar />
              <Routes>
                  <Route exact path="/home" element={<App />} />
                  <Route exact path="/category/informal" element={<ItemListContainer />} />
                  <Route exact path="/category/deportivas" element={<ItemListContainer />} />
                  <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              </Routes>
          </BrowserRouter>
  );
}

export default App;
