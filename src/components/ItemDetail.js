import React from 'react';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { carritoContext } from './CartContext';

import '../cardsStyle.css';

function ItemDetail({ item = [] }) {
	const { producto, tipo, img, precio, stock } = item;
	const Carrito = useContext(carritoContext);

	const onAdd = (count) => {
		Carrito.addItem(item, count);
	};

	return (
		<div className="cardDos">
			<img src={img} alt={producto} />

			<hr></hr>

			<div className="card-contenidoDos">
				<h3 className="card-tituloProdDos">{producto}</h3>
				<h4 className="card-descripcionDos">{tipo}</h4>
				<h2 className="card-precioDos">${precio}</h2>
				<h4 className="card-stockDos">{stock}</h4>
				<ItemCount
					producto={item.producto}
					stock={item.stock}
					precio={item.precio}
					tipo={item.tipo}
					onAdd={onAdd}
					initial={item.stock > 0 ? 1 : 0}
				/>
			</div>
		</div>
	);
}

export default ItemDetail;
