import React from 'react';
import { Link } from 'react-router-dom';


const Item = (props) => {

   return (
      <div>
         <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
            <div className="item">
               <img src={props.img} alt="clothing item" className="item-img" />
               <div className="item-title">{props.title}</div>
               <div className="item-price">${props.price}.00</div>
            </div>
         </Link>
      </div>
   )
}

export default Item;

