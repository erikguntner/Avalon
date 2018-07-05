import React, { Component } from 'react'
import Review from './Review';
import { connect } from "react-redux";
// import clothingItems from '../clothing.js';
import * as actions from "../actions/actions";
import 'babel-polyfill';


const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, clothingList, cart, cartTotal, size) => dispatch(actions.addToCart(id, clothingList, cart, cartTotal, size)),
    submitReview: (reviews, text, id, author) => dispatch(actions.submitReview(reviews, text, id, author)),
    setReviews: (id) => dispatch(actions.setReviews(id)),
    getGarment: (garmentId) => dispatch(actions.getGarment(garmentId))
  }
}

const mapStateToProps = store => {
  return {
    cart: store.clothes.cart,
    cartTotal: store.clothes.cartTotal,
    reviews: store.clothes.reviews,
    currentItem: store.clothes.currentItem,
    clothingList: store.clothes.clothingList
  }
}

class ItemInfo extends Component {
  constructor() {
    super();
    this.state = {
      size: undefined,
    }
  }

  async componentDidMount() {
    this.props.getGarment(this.props.match.params.id);
    this.props.setReviews(this.props.match.params.id);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSizeClick(event) {
    if (!this.state.size) {
      event.target.classList.add('btn-sizes-focus');
      this.setState({
        size: event.target.textContent
      })
    } else {
      event.target.parentElement.childNodes.forEach((elem) => elem.classList.contains('btn-sizes-focus') ? elem.classList.remove('btn-sizes-focus') : '');
      event.target.classList.add('btn-sizes-focus');
      this.setState({
        size: event.target.textContent
      })
    }
  }

  render() {

    const { currentItem } = this.props;

    let sizes;
    const pantsSizes = [28, 30, 32, 34, 36, 38];
    const topsSizes = ['S', 'M', 'L', 'XL'];
    if (currentItem.type === 'pants') {
      sizes = pantsSizes.map(size => <button className="btn-sizes" onClick={(event) => this.handleSizeClick(event)}>{size}</button>)
    } else if (currentItem.type === 'outerwear') {
      sizes = topsSizes.map(size => <button className="btn-sizes" onClick={(event) => this.handleSizeClick(event)}>{size}</button>)
    }

    return (
      <section className="item-info">
        <div className="item-info-section">
          <img className="item-info-image" src={currentItem.img} alt="item-image" />
        </div>
        <div className="item-info-section">
          <h3 id={currentItem.id} className="item-info-title idt"><strong>{currentItem.title}</strong></h3>
          <h4 className="item-info-price">${currentItem.price}.00</h4>
          <p className="item-info-description">{currentItem.description}</p>
          <div className="sizes-container">
            {sizes}
          </div>
          <button className="btn" onClick={() => this.props.addToCart(this.props.match.params.id, this.props.clothingList, this.props.cart, this.props.cartTotal, this.state.size)}>Add to Cart</button>
          <hr></hr>
          <form onSubmit={(event) => {
            event.preventDefault();
            this.props.submitReview(this.props.reviews, this.state.text, this.props.match.params.id, 'Hingle McCringleberry');
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
