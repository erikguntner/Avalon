import React from 'react'
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <div className="cart-container" id="cart-container">
      {
        props.cart.map((item, i) => {
          console.log(item);
          return <CartItem key={`item${i}`} id={item.id} title={item.title} price={item.price} img={item.img} removeFromCart={props.removeFromCart} cart={props.cart} size={item.size} cartTotal={props.cartTotal}/>
        })
      }
    </div >
  )
}

export default Cart
