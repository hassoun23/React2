import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../data/Products';

const ItemListContainer = () => {
	let { category } = useParams();
	const [item, setitem] = useState([]);

	useEffect(() => {
		const data = (dataX, category) => {
			new Promise((resolve, reject) => {
				console.log(dataX);
				setTimeout(() => {
					if (category !== undefined) {
						setitem(resolve(dataX.filter((g) => g.category === category)));
					} else {
						reject('error');
					}
				}, 2000);
			});
		};
	}, [category]);

	/* useEffect(() => {
    setTimeout(() => {
      const data = new Promise((resolve, reject) => {
          console.log(category);
        if (category !== undefined) {
          resolve(
            category ? data.filter((el => el.category === category)) : data 
          );
        } else {
          reject("error");
        }
      });
    }, 2000);
  }, [category]);
 */
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
