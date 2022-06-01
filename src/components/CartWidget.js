import React from 'react';
import { carritoContext } from './CartContext';
import { useContext } from 'react';

function CartWidget() {
	const { carrito } = useContext(carritoContext);
	return (
		<button type="button" class="btn btn-dark">
			carrito
			{carrito.length > 0 ? (
				<span class="badge text-bg-secondary">
					{carrito.reduce((a, b) => a + b.count, 0)}
				</span>
			) : null}
		</button>
	);
}

export default CartWidget;
