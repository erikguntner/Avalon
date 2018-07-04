import React, { Component } from 'react'
import { connect } from "react-redux";
import clothingItems from '../clothing.js';
import * as actions from "../actions/actions";


const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(actions.addToCart(id)),
    submitReview: () => dispatch(actions.submitReview())
  }
}

const mapStateToProps = store => {
  return {
    cartTotal: store.clothing.cartTotal,
    cart
  }
}

class ItemInfo extends Component {
  constructor() {
    super();
    this.state = {
      size: 32,
    };
  }

  render() {
    const { match } = this.props;
    const matchedItem = clothingItems.find(item => {
      return item.id.toString() === match.params.id
    });


    return (
      <section className="item-info">
        <div className="item-info-section">
          <img className="item-info-image" src={matchedItem.img} alt="item-image" />
        </div>
        <div className="item-info-section">
          <h3 id={matchedItem.id} className="item-info-title idt"><strong>{matchedItem.title}</strong></h3>
          <h4 className="item-info-price">${matchedItem.price}.00</h4>
          <p className="item-info-description">{matchedItem.description}</p>
          <button className="btn" onClick={() => this.props.addToCart(match.params.id)}>Add to Cart</button>
          <hr></hr>
          <button className="btn" onClick={() => this.props.submitReview()}>Submit Review</button>
        </div>
      </section>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemInfo);
