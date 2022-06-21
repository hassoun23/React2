import React from 'react';
import { carritoContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import '../../style.css';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { carrito, clear } = useContext(carritoContext);

	console.log(carrito);

	return (
		<div>
			<div className="d-flex justify-content-center mt-2">
				<h3>
					{'TOTAL: $ ' +
						carrito.reduce((acc, el) => acc + el.precio * el.count, 0)}
				</h3>
				<button
					type="button"
					className="btn btn-danger boton-vaciar"
					onClick={() => clear()}
				>
					Vaciar
				</button>
			</div>
			<div>
				{carrito.length > 0 ? (
					carrito.map((carr) => {
						return (
							<div>
								<CartItem
									key={carr.id}
									productoCarrito={carrito}
									img={carr.img}
									tipo={carr.tipo}
									producto={carr.producto}
									count={carr.count}
									id={carr.id}
									stock={carr.stock}
								/>
							</div>
						);
					})
				) : (
					<h3 className="carrito-vacio">No hay productos en el carrito</h3>
				)}
			</div>
			{carrito.length > 0 ? (
				<div className="boton-finalizarCompra">
					<Link to="/cart">
						<button type="button" className="btn btn-success ">
							Finalizar Compra
						</button>
					</Link>
				</div>
			) : null}
		</div>
	);
};

export default Cart;
