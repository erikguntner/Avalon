import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import ItemInfo from './components/ItemInfo';
import Cart from './components/Cart';
import StoreContainer from './components/StoreContainer';
import { connect } from "react-redux";
import * as actions from "./actions/actions";


const mapStateToProps = store => {
  return {
    cartTotal: store.clothes.cartTotal,
    cart: store.clothes.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (target, cart, cartTotal) => dispatch(actions.removeFromCart(target, cart, cartTotal))
  }
}

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header cartTotal={this.props.cartTotal} />
          <Cart cartTotal={this.props.cartTotal} cart={this.props.cart} removeFromCart={this.props.removeFromCart} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/store" component={StoreContainer} />
            <Route path="/:id" component={ItemInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
