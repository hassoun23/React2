import React from 'react';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import { carritoContext } from '../../components/CartContext/CartContext';
import { useContext } from 'react';

const initialState = {
	name: '',
	phone: '',
	email: '',
};

function CartView() {
	const [values, setValues] = useState(initialState);
	const [purchaseId, setPurchaseId] = useState('');

	const { carrito, clear } = useContext(carritoContext);
	let total = `$ ${carrito.reduce((acc, el) => acc + el.precio * el.count, 0)}`;

	const handlerOnChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		console.log(values);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'purchase'), {
			values,
			carrito,
			total,
		});
		console.log('Document written with ID: ', docRef.id);
		setPurchaseId(docRef.id);
		setValues(initialState);

		clear();
	};

	return (
		<div className="container mt-5 d-flex justify-content-center align-items-center">
			<div className="row col-md-6 ">
				<form
					action="#"
					method="get"
					className="d-flex flex-column justify-content-center"
					onSubmit={handleSubmit}
				>
					<div className="form-group">
						<label for="name">Nombre:</label>
						<input
							className="form-control"
							type="text"
							name="name"
							id="name"
							placeholder="Introduzca su nombre"
							value={values.name}
							onChange={handlerOnChange}
						/>
					</div>

					<div className="form-group">
						<label for="idnumber">Telefono:</label>
						<input
							className="form-control"
							type="number"
							name="phone"
							id="phone"
							placeholder="Ingrese su telefono"
							value={values.phone}
							onChange={handlerOnChange}
						/>
					</div>

					<div className="form-group">
						<label for="email">Correo electronico:</label>
						<input
							className="form-control"
							type="email"
							name="email"
							id="email"
							placeholder="Introduzca su email"
							value={values.email}
							onChange={handlerOnChange}
						/>
					</div>

					<br />
					<div className="container d-flex justify-content-center mb-5">
						<div className="row col-3 col-md-4 col-sm-6">
							<button className="btn btn-primary">Comprar</button>
						</div>
					</div>
				</form>
				{purchaseId && <MessageSuccess purchaseId={purchaseId} />}
			</div>
		</div>
	);
}

export default CartView;
