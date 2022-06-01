import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import './cardsStyle.css';

import ItemListContainer from './components/ItemListContainer';
import { CarritoProvaider } from './components/CartContext';
import CartCarrito from './views/CartCarrito/CartCarrito';

function App() {
	return (
		<>
			<CarritoProvaider>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/detail/:id" element={<ItemDetailContainer />} />
						<Route
							path="/categoria/:category"
							element={<ItemListContainer />}
						/>
						<Route path="/cart" element={<CartCarrito />} />
					</Routes>
				</Router>
			</CarritoProvaider>
		</>
	);
}

export default App;
