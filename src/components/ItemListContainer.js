import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { productos } from '../data/Products';

const ItemListContainer = () => {
	let { category } = useParams();
	const [item, setitem] = useState([]);

	useEffect(() => {
		const getData = new Promise((resolve, reject) => {
			resolve(productos);
		});
		getData.then((Data) => {
			if (category === undefined) {
				setitem(Data);
			} else {
				setitem(Data.filter((el) => el.category === category));
			}
		});
		getData.catch((err) => {
			console.log(err);
		});
	}, [category]);

	return (
		<>
			<h2>Bienvenidos a Realstock</h2>
			<div>
				<ItemList items={item} />
			</div>
		</>
	);
};

export default ItemListContainer;
