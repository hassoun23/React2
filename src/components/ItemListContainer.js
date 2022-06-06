import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const ItemListContainer = () => {
	let { category } = useParams();
	const [item, setitem] = useState([]);

	useEffect(() => {
		const getProductos = async () => {
			const q = query(collection(db, 'productos'));
			const querySnapshot = await getDocs(q);
			const docs = [];
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				docs.push({ ...doc.data(), id: doc.id });
				console.log(docs);
			});
			if (category === undefined) {
				setitem(docs);
			} else {
				setitem(docs.filter((item) => item.category === category));
			}
		};
		getProductos();
	}, [category]);

	return (
		<>
			<div>
				<ItemList items={item} />
			</div>
		</>
	);
};

export default ItemListContainer;
