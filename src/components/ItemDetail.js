import React from "react";
import ItemCount from "./ItemCount";

import "../cardsStyle.css";



function ItemDetail({ item }) {
  const { producto, tipo, img, precio, stock } = item;
  return (

    <div className="cardDos">


      <img src={img} alt={producto} />

      <hr></hr>


      <div className="card-contenidoDos">
        <h3 className="card-tituloProdDos">{producto}</h3>
        <h4 className="card-descripcionDos">{tipo}</h4>
        <h2 className="card-precioDos">${precio}</h2>
        <h4 className="card-stockDos">{stock}</h4>
        <ItemCount stock={stock} />
      </div>

    </div>

  );
}

export default ItemDetail