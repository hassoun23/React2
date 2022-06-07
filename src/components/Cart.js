import React from 'react';
import { carritoContext } from './CartContext';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = () => {
	const { carrito } = useContext(carritoContext);

	console.log(carrito);

	return (
		<div>
			{carrito.length > 0 ? (
				carrito.map((carr) => {
					return (
						<div>
							<CartItem
								key={carr.id}
								productoCarrito={carr.carrito}
								img={carr.item.img}
								tipo={carr.item.tipo}
								producto={carr.item.producto}
								count={carr.count}
								id={carr.item.id}
							/>
							<h3>
								{'TOTAL: $ ' +
									carrito.reduce(
										(acc, el) => acc + el.item.precio * el.count,
										0
									)}
							</h3>
						</div>
					);
				})
			) : (
				<h3>No hay productos en el carrito</h3>
			)}
		</div>
	);
};

export default Cart;
