import React from 'react';

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import '../../style.css';

function Home() {
	return (
		<>
			{/* 	<div className="home-portada">
				<img src={Portada} alt="" width="300px" />
				<h2 className="texto-home">Bienvenidos a Realstock</h2>
			</div> */}
			<ItemListContainer />
		</>
	);
}

export default Home;
