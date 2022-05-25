import { createContext, useState } from 'React';

export const CarritoContext = createContext();

const InitialCarrito = [];

export const CarritoProvaider = ({ children }) => {
	const [Carrito, setCarrito] = useState(InitialCarrito);

	const EnCarrito = (id) => {
		return Carrito.some((el) => el.item.id === id);
	};

	const Agregar = (item, count) => {
		if (EnCarrito === true) {
			setCarrito([...Carrito, { Count: count + 1 }]);
		} else {
			setCarrito([...Carrito, { item: item, count: count }]);
		}
	};

	const EliminarItem = (item) => {
		setCarrito(Carrito.filter((el) => el.item.id === item));
	};

	const clear = () => {
		setCarrito([]);
	};

	return (
		<CarritoContext.Provider
			value={{ EliminarItem, clear, EnCarrito, Agregar }}
		>
			{children}
		</CarritoContext.Provider>
	);
};
