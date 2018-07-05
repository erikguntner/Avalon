import React from 'react'
import { Link } from 'react-router-dom';
import FaRemove from 'react-icons/lib/fa/close';


const CartItem = (props) => {
   return (
      <div className="cart-item">
         <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
            <img src={props.img} alt="clothing item" className="cart-img" />
         </Link>
         <div className="cart-item-column">
            <div className="cart-item-title">{props.title}</div>
            <div className="cart-item-price">Size: {props.size}</div>
            <div className="cart-item-price">${props.price}.00</div>
         </div>
         <div className="cart-item-icon" ><FaRemove onClick={() => { props.removeFromCart(props.id, props.cart, props.cartTotal) }} /></div>
      </div>
   )
}

export default CartItem;
