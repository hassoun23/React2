import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import '../../Style.css';
import {
	collection,
	query,
	where,
	getDocs,
	documentId,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = () => {
	let { id } = useParams();
	const [item, setitem] = useState([]);

	useEffect(() => {
		const getProductos = async () => {
			const q = query(
				collection(db, 'productos'),
				where(documentId(), '==', id)
			);
			const querySnapshot = await getDocs(q);
			const docs = [];
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				docs.push({ ...doc.data(), id: doc.id });
				console.log(docs);
			});
			console.log(docs);
			setitem(docs);
		};
		getProductos();
	}, [id]);

	return (
		<div>
			<h2>Detalle del producto</h2>
			{item !== undefined
				? item.map((iteracion) => {
						return <ItemDetail item={iteracion} key={iteracion.id} />;
				  })
				: null}
		</div>
	);
};

export default ItemDetailContainer;
