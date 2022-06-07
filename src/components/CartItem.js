import { carritoContext } from './CartContext';
import { useContext } from 'react';

const CartItem = ({ producto, tipo, img, id, count }) => {
	const carrito = useContext(carritoContext);

	return (
		<div className="" name="card mb-3" style={{ maxWidh: 540 }}>
			<div className="row g-0">
				<div className="col-md-4">
					<img src={img} className="img-fluid rounded-start" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{producto}</h5>
						<p className="card-text">{tipo}</p>
						<p className="card-text">
							<small className="text-muted"></small>
						</p>
						<h3>{count + ' unidades'} </h3>
						{/* <h6>
							{'TOTAL: $' +
								carrito.carrito.reduce(
									(acc, el) => acc + el.item.precio * el.count,
									0
								)}
							;
						</h6> */}
					</div>
					<button
						type="button"
						className="btn-close"
						aria-label="Close"
						onClick={() => carrito.EliminarItem(id)}
					></button>
				</div>
			</div>
			<hr></hr>
		</div>
	);
};

export default CartItem;
