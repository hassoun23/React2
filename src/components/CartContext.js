import { createContext, useState } from 'react';

export const CarritoContext = createContext([]);

export const CarritoProvaider = ({ InitialCarrito = [], children }) => {
	const [Carrito, setCarrito] = useState(InitialCarrito);

	const EnCarrito = (id) => {
		return Carrito.some((el) => el.item.id === id);
	};

	const addExistingItem = (item, count) => {
		let newCarrito = Carrito;
		let existingItem = newCarrito.find((el) => el.item.id === item.id);
		existingItem.quant += count;
		newCarrito[newCarrito.findIndex((el) => el.item.id === item.id)] =
			existingItem;
		setCarrito(newCarrito);
	};

	const addItem = (item, count) => {
		EnCarrito(item.id)
			? addExistingItem(item, count)
			: setCarrito([...Carrito, { item: item, count: count }]);
	};

	const EliminarItem = (item) => {
		setCarrito(Carrito.filter((el) => el.item.id === item));
	};

	const clear = () => {
		setCarrito([]);
	};

	return (
		<CarritoContext.Provider
			value={{ Carrito, EliminarItem, clear, EnCarrito, addItem }}
		>
			{children}
		</CarritoContext.Provider>
	);
};
