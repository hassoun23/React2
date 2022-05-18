import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Productos from './views/Productos/Productos'
import Ofertas from './views/Ofertas/Ofertas';
import ItemDetailContainer from './components/ItemDetailContainer';
import "./cardsStyle.css";



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Ofertas' element={<Ofertas />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />

      </Routes>

    </Router>
  );
}

export default App;
