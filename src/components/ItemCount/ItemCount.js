import { useState } from 'react';

const ItemCount = ({
	producto,
	stock,
	precio,
	onAdd,
	tipo,
	initial,
	newStock,
}) => {
	let [count, setCount] = useState(initial);

	return (
		<div className="container ">
			<div className="row  botonesCount">
				<div className="botones">
					<button
						className="boton-restar"
						onClick={() => (count > 0 ? setCount(count - 1) : (count = 0))}
					>
						-
					</button>
					<h3 className="p-2 ">{count}</h3>
					<button
						className="boton-sumar"
						onClick={() => (count < stock ? setCount(count + 1) : null)}
					>
						+
					</button>
				</div>

				<div className="botonAdd">
					<button
						className="boton-agragar"
						onClick={() => {
							onAdd(count, producto);
							newStock = newStock - count;

							setCount(0);
						}}
					>
						Agregar a Carrito
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
