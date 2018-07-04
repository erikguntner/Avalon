import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Item from './Item';
import clothingItems from '../clothing.js';

class Landing extends Component {
   render() {
      const clothing = clothingItems.map((item, i) => {
         return <Item key={item.id} id={item.id} title={item.title} price={item.price} img={item.img} />
      });

      return (
         <Fragment>
            <section className="landing">
               <div className="container">
                  <h1 className="landing-title">Clothing Store</h1>
                  <Link to="/store" style={{ textDecoration: 'none' }}>
                     <button className="btn">Shop Now</button>
                  </Link>
               </div>
            </section>
            <section className="favorites">
               <h2 className="favorites-title">Our Favorites</h2>
               <hr></hr>
               <div className="favorites-container">
                  {clothing}
               </div>
            </section>
         </Fragment>
      )
   }
}


export default Landing;
