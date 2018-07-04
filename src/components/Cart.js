import React from 'react'
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <div className="cart-container" id="cart-container">
      {
        props.cart.map((item, i) => {
          return <CartItem key={`item${i}`} id={item.id} title={item.title} price={item.price} img={item.img} removeFromCart={props.removeFromCart} />
        })
      }
    </div >
  )
}

export default Cart
