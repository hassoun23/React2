import React from 'react';
import { carritoContext } from './CartContext';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (producto) => {
	const cart = useContext(carritoContext);

	console.log(cart);

	return (
		<div>
			{cart.length > 0 ? (
				cart.map((carr) => {
					return (
						<CartItem
							key={carr.id}
							producto={carr.item.producto}
							img={carr.item.img}
							tipo={carr.item.tipo}
						/>
					);
				})
			) : (
				<h3>No hay productos en el carrito</h3>
			)}
		</div>
	);
};

export default Cart;
