import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import Item from './Item';

const mapStateToProps = (store) => {
  return {
    clothingItems: store.clothes.clothingList
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

class StoreContainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="store-header">
          <h1>Filter your search</h1>
          <label>
            Sort By Price:
          <select>
              <option value="volvo">Any</option>
              <option value="saab">Highest to Lowest</option>
              <option value="mercedes">Lowest to Highest</option>
            </select>
          </label>
        </div>
        <section className="store-container">
          <div className="store-items-container">
            {this.props.clothingItems.map((item, i) => {
              return <Item key={item.id} id={item.id} title={item.title} price={item.price} img={item.img} />
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
