import React from 'react';

import { useEffect, useState } from 'react';
import { productos } from '../data/Products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import '../cardsStyle.css';

const ItemDetailContainer = () => {
	let { id } = useParams();
	const [item, setitem] = useState([]);

	useEffect(() => {
		const data = new Promise((resolve, reject) => {
			resolve(productos);
			console.log(data);
		});
		data.then((data) => {
			setitem(data.find((el) => el.id === id));
		});
		data.catch((err) => {
			console.log(err);
		});
	}, [id]);

	return (
		<div>
			<h2>Detalle del producto</h2>
			{item !== undefined ? <ItemDetail item={item} /> : null}
		</div>
	);
};

export default ItemDetailContainer;
