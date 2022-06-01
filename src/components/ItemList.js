import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import '../cardsStyle.css';

function ItemList({ items }) {
	return (
		<div className="container" style={{ maxWidth: 1320 }}>
			<div className="row ">
				{items.map((iteracion) => {
					return (
						<div className="col-md-4" key={iteracion.id}>
							<Link
								to={`detail/${iteracion.id}`}
								style={{ textDecoration: 'none' }}
							>
								<Item item={iteracion} />
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ItemList;
