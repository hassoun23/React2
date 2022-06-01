import React from 'react';
import { CarritoContext } from './CartContext';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = () => {
	const cart = useContext(CarritoContext);

	return (
		<div>
			{cart.length > 0
				? cart.map((i) => (
						<CartItem
							key={i.item.id}
							productCarrito={i.item.tipo}
							count={i.item.count}
						></CartItem>
				  ))
				: null}
		</div>
	);
};

export default Cart;
