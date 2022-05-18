import React from "react";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { productos } from "../data/Products";
import ItemList from "./ItemList";





const ItemListContainer = () => {
    const [item, setitems] = useState([]);

    useEffect(() => {
        setTimeout(() => {


            const data = new Promise((resolve, reject) => {
                resolve(productos);
            });
            data.then(data => {
                setitems(data);
            }
            );
            data.catch(err => {
                console.log(err);
            })
        }, 2000)
    }, []);

    return (
        <>

            <h2>Bienvenidos a Realstock</h2>
            <div>

                <ItemList items={item} />

            </div>
        </>
    )
}


export default ItemListContainer