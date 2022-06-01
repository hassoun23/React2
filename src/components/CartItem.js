import { carritoContext } from './CartContext';
import { useContext } from 'react';

const CartItem = ({ productCarrito, count }) => {
	const { producto, tipo, img, id } = productCarrito;

	const cart = useContext(carritoContext);

	return (
		<div className="" Name="card mb-3" style="max-width: 540px;">
			<div className="row g-0">
				<div className="col-md-4">
					<img src={img} className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{producto}</h5>
						<p className="card-text">{tipo}</p>
						<p className="card-text">
							<small className="text-muted">{count}</small>
						</p>
						<h3>{count + 'unidades'} </h3>
						<h6>
							{'TOTAL: $' +
								cart.reduce((acc, el) => acc + cart.el.precio * el.count, 0)}
							;
						</h6>
					</div>
					<button
						type="button"
						class="btn-close"
						aria-label="Close"
						onClick={() => cart.EliminarItem(id)}
					></button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
