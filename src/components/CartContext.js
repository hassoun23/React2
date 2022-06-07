import { createContext, useState } from 'react';

export const carritoContext = createContext([]);

export const CarritoProvaider = ({ children }) => {
	const [carrito, setcarrito] = useState([]);

	const Encarrito = (id) => {
		return carrito.some((el) => el.item.id === id);
	};

	const addExistingItem = (item) => {
		/* let newcarrito = carrito;
		let existingItem = newcarrito.find((el) => el.item.id === item.id);
		existingItem.quant += count;
		newcarrito[newcarrito.findIndex((el) => el.item.id === item.id)] =
			existingItem;
		setcarrito(newcarrito); */
		const productoRepetido = carrito.findIndex((el) => el.id === item.id);

		if (productoRepetido !== -1) {
			setcarrito(
				carrito.map((el) =>
					el.id === item.id ? { ...el, count: el.count + item.count } : el
				)
			);
		} else {
			setcarrito([item, ...carrito]);
		}
	};

	const addItem = (item, count) => {
		Encarrito(item.id)
			? addExistingItem(item, count)
			: setcarrito([...carrito, { item: item, count: count }]);
	};

	const EliminarItem = (item) => {
		setcarrito(carrito.filter((el) => el.item.id !== item));
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
