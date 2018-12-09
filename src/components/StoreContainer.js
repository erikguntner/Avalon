import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import Item from './Item';
import * as actions from "../actions/actions";
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

class StoreContainer extends Component {

  async componentDidMount() {
    this.props.setClothes();
  }

  handleChange(event) {
    console.log(event.target.value)
    if (event.target.value === 'high') {
      const sorted = this.props.clothingItems.sort((a, b) => a.price + b.price)
      console.log('high', sorted);
    } else if (event.target.value === 'low') {
      const sorted = this.props.clothingItems.sort((a, b) => a.price - b.price)
      console.log('low', sorted)
    }
  }

  render() {
    return (
      <Fragment>
        <div className="store-header">
          <h1>Filter your search</h1>
          <label>
            Sort By Price:
          <select onChange={(event) => this.handleChange(event)}>
              <option value="all">Any</option>
              <option value="high">Highest to Lowest</option>
              <option value="low">Lowest to Highest</option>
            </select>
          </label>
        </div>
        <section className="store-container">
          <div className="store-items-container">
            {this.props.clothingItems.map((item, i) => {
              return <Item key={item._id} id={item._id} title={item.title} price={item.price} img={item.img} />
            })}
          </div>
        </section>
      </Fragment >
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreContainer);
