import React from 'react';

import ItemListContainer from '../../components/ItemListContainer';
import '../../cardsStyle.css';

function Home() {
	return (
		<>
			<h2>Bienvenidos a Realstock</h2>
			<ItemListContainer />
		</>
	);
}

export default Home;
