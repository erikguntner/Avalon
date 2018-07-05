import React, { Component } from 'react'
import Review from './Review';
import { connect } from "react-redux";
import clothingItems from '../clothing.js';
import * as actions from "../actions/actions";
import 'babel-polyfill';


const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, cart, cartTotal) => dispatch(actions.addToCart(id, cart, cartTotal)),
    submitReview: (reviews, text, id, author) => dispatch(actions.submitReview(reviews, text, id, author)),
    setReviews: (reviews, fetchedReviews) => dispatch(actions.setReviews(reviews, fetchedReviews))
  }
}

const mapStateToProps = store => {
  return {
    cart: store.clothes.cart,
    cartTotal: store.clothes.cartTotal,
    reviews: store.clothes.reviews
  }
}

class ItemInfo extends Component {
  constructor() {
    super();
    this.state = {
      size: 32,
      text: ''
    }
  }

  async componentDidMount() {
    const result = await fetch('http://localhost:3000/reviews')
    const fetchedReviews = await result.json();
    const filteredReviews = fetchedReviews.filter(review => review.id.toString() === this.props.match.params.id);
    this.props.setReviews(this.props.reviews, filteredReviews);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
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
          <button className="btn" onClick={() => this.props.addToCart(this.props.cart, this.props.cartTotal, match.params.id)}>Add to Cart</button>
          <hr></hr>
          <form onSubmit={(event) => {
            event.preventDefault();
            this.props.submitReview(this.props.reviews, this.state.text, match.params.id, 'Hingle McCringleberry');
          }}>
            <textarea placeholder="Leave a review" onChange={(event) => this.handleChange(event)} />
            <input className="btn-secondary" type="submit" value="Submit review"></input>
          </form>
          <div className="review-container">
            {this.props.reviews.map(review => <Review name={review.createdBy} date={review.craetedAt} message={review.message} />)}
          </div>
        </div>
      </section>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemInfo);
