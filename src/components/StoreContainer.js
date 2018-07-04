import React, { Component, Fragment } from 'react'

class StoreContainer extends Component {
  render() {
    return (
      <Fragment>
        <label>
          Sort By Style:
          <select>
            <option value="volvo">All</option>
            <option value="volvo">Jeans</option>
            <option value="saab">Shirts</option>
            <option value="mercedes">Hats</option>
            <option value="audi">Jackets</option>
          </select>
        </label>
        <label>
          Sort By Price:
          <select>
            <option value="volvo">Any</option>
            <option value="saab">Highest to Lowest</option>
            <option value="mercedes">Lowest to Highest</option>
          </select>
        </label>
      </Fragment >
    )
  }
}

export default StoreContainer;
