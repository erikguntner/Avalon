import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Item from './Item';
import Map from './Map';
import * as actions from "../actions/actions";
import { connect } from "react-redux";
// import clothingItems from '../clothing.js';
import 'babel-polyfill';


const mapStateToProps = (store) => {
  return {
    clothingItems: store.clothes.clothingList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setClothes: () => dispatch(actions.setClothes())
  }
}

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      clothes: null
    }
  }

  async componentDidMount() {
    this.props.setClothes();
  }

  render() {

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
            {this.props.clothingItems.map((item, i) => {
              return <Item key={item._id} id={item._id} title={item.title} price={item.price} img={item.img} />
            })}
          </div>
        </section>
        <div className="map-container">
          <h2 className="map-title">Where You Can Find Us</h2>
          <hr></hr>
          <Map />
        </div>
      </Fragment>
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
