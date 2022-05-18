import React from "react";
import ItemCount from "./ItemCount";


function Item({ item }) {
  const { producto, tipo, img, precio, stock } = item;
  return (

      <div className="card">
      

        <img src={img} alt={producto} />

    <hr></hr>
      
     
        <div className="card-contenido">
          <h3 className="card-tituloProd">{producto}</h3>
          <h4 className="card-descripcion">{tipo}</h4>
         <h2 className="card-precio">{precio}</h2>
      {/* <ItemCount stock={stock} /> */}
        </div>
      
      </div>
    
  );
}

export default Item;
