import React from 'react';
import Item from './Item';
import { Link } from "react-router-dom";
import "../cardsStyle.css";



function ItemList({ items }) {
  return (
    <div className='item-list'>
      {items.map((iteracion) => {
        return (
          <div key={iteracion.id}>
            <Link
              to={`detail/${iteracion.id}`}
              style={{ textDecoration: 'none' }}

            >
              <Item item={iteracion} />
            </Link>
          </div>);
      })}


    </div>);
}

export default ItemList