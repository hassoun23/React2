import React from 'react';
import '../Style.css';

function Item({ item }) {
	const { producto, tipo, img, precio } = item;
	console.log(item);
	return (
		<div className="card">
			<img src={img} alt={producto} className="card-img-top" />

			<div className="card-body">
				<h3 className="card-title">{producto}</h3>
				<h4 className="card-text">{tipo}</h4>
				<h2 className="card-precio">${precio}</h2>
				{/* <ItemCount stock={stock} /> */}
			</div>
		</div>
	);
}

export default Item;
