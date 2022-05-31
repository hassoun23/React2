import React from 'react';
import { CarritoContext } from './CartContext';
import { useContext } from 'react';

function CartWidget() {
	const { Carrito } = useContext(CarritoContext);
	return (
		<button type="button" class="btn btn-dark">
			Carrito
			{Carrito.length > 0 ? (
				<span class="badge text-bg-secondary">
					{Carrito.reduce((a, b) => a + b.count, 0)}
				</span>
			) : null}
		</button>
	);
}

export default CartWidget;
