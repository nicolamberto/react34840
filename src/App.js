import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartContextProvider from './components/context/CartContext';
import { useState } from 'react';



function App() {

 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer/>} />
          <Route path={"/categoria/:categoryId"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
