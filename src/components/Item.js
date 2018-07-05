import React from 'react';
import { Link } from 'react-router-dom';


const Item = (props) => {

   return (
      <div>
         <div className="item">
            <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
               <img src={props.img} alt="clothing item" className="item-img" />
            </Link>
            <div className="item-title">{props.title}</div>
            <div className="item-price">${props.price}.00</div>
         </div>
      </div>
   )
}

export default Item;

