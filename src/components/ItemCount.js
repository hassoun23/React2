import {useState}  from "react";


const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);
    const [carrito,setCarrito] = useState("Agregar al Carrito");

function add (){
    count < stock ? setCount(count +  1) : alert("no hay stock")
}

function rest (){
   if( count > 1) {
       setCount (count - 1);
   }
}

function onAdd () {
    setCarrito ("se ha añadido al carrito");

}

return(
<div className="container ">
 <div className="row  botonesCount">
     <div className="botones">
<button className="boton-restar" onClick={rest}>-</button>
<h3 className="p-2 ">{count}</h3>
<button className="boton-sumar" onClick={add}>+</button>
 </div>
<div className="botonAdd">
<button className="boton-agragar" onClick={onAdd}>{carrito}</button>
</div>

 </div>
 </div>


);

}


export default ItemCount