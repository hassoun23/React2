import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import './cardsStyle.css';
import Cart from './views/Cart/Cart';
import ItemListContainer from './components/ItemListContainer';
import { CarritoContext } from './components/CartContext';

function App() {
	return (
		<CarritoContext>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/detail/:id" element={<ItemDetailContainer />} />
					<Route path="/categoria/:category" element={<ItemListContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</CarritoContext>
	);
}

export default App;
