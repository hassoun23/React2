import { createContext, useState } from 'react';

export const carritoContext = createContext([]);

export const CarritoProvaider = ({ children }) => {
	const [carrito, setcarrito] = useState([]);

	const Encarrito = (id) => {
		return carrito.some((el) => el.id === id);
	};

	const addExistingItem = (item, count) => {
		setcarrito(
			carrito.map((el) =>
				el.id === item.id ? { ...el, count: el.count + count } : el
			)
		);
	};

	const addItem = (item, count) => {
		Encarrito(item.id)
			? addExistingItem(item, count)
			: setcarrito([...carrito, { ...item, count: count }]);
	};

	const EliminarItem = (item) => {
		setcarrito(carrito.filter((el) => el.id !== item));
	};

	const clear = () => {
		setcarrito([]);
	};

	return (
		<carritoContext.Provider
			value={{ carrito, EliminarItem, clear, Encarrito, addItem }}
		>
			{children}
		</carritoContext.Provider>
	);
};
