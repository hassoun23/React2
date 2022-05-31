import { CarritoContext } from './CartContext';
import { useContext } from 'react';

const CartItem = ({ product, count }) => {
	const { producto, tipo, img, precio } = product;

	const cart = useContext(CarritoContext);
	return (
		<div className="card">
			<div className="card-contenido">
				<button type="button" class="btn-close-red"></button>
				<img src={img} alt={producto} />
			</div>
			<h3 className="card-tituloProd">{producto}</h3>
			<h4 className="card-descripcion">{tipo}</h4>
			<h2 className="card-precio">{precio}</h2>
		</div>
	);
};

export default CartItem;
