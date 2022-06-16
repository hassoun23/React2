import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import '../Style.css';

function ItemList({ items }) {
	return (
		<div className="container container-productos" style={{ maxWidth: 1320 }}>
			<div className="row ">
				{items.map((prod) => {
					return (
						<div className="col-md-4" key={prod.id}>
							<Link
								to={`/detail/${prod.id}`}
								style={{ textDecoration: 'none', color: 'black' }}
							>
								<Item item={prod} />
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ItemList;
