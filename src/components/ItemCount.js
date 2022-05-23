import { useState } from "react";
import {Link} from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [carrito, setCarrito] = useState("Agregar al Carrito");

  function add() {
    count < stock ? setCount(count + 1) : alert("no hay stock");
  }

  function rest() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

 /*  function agregar() {
    setCarrito("Producto añadido")
    } */
  

  return (
    <div className="container ">
      <div className="row  botonesCount">
        <div className="botones">
          <button className="boton-restar" onClick={rest}>
            -
          </button>
          <h3 className="p-2 ">{count}</h3>
          <button className="boton-sumar" onClick={add}>
            +
          </button>
        </div>
        <Link to={'/Cart'}>
        <div className="botonAdd">
          <button className="boton-agragar" onClick={onAdd(count)}  >
            {carrito}
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
