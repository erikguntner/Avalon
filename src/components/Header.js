import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom';
import FaCart from 'react-icons/lib/fa/shopping-cart';
import FaUser from 'react-icons/lib/fa/user';


class Header extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
    }
  }

  toggleVisibility() {
    const container = document.getElementById('cart-container');
    this.state.visible ? container.style.visibility = 'hidden' : container.style.visibility = 'visible';
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    let totalCounter;

    if (this.props.cartTotal > 0) {
      totalCounter = <div style={{ marginRight: '0' }} className="header-item cart-total">{this.props.cartTotal}</div>
    } else {
      totalCounter = '';
    }
    return (
      <Fragment>
        <div className="header">
          <div className="header-section left">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="header-item">Home</div>
            </Link>
            <Link to="/store" style={{ textDecoration: 'none' }}>
              <div className="header-item">Store</div>
            </Link>
          </div>
          <div className="header-section">
            <div className="header-item icon cart" onClick={() => this.toggleVisibility()}><FaCart /></div>
            {totalCounter}
            <div className="header-item icon" style={{ marginLeft: '2rem' }}><FaUser /></div>
          </div>
        </div>
      </Fragment >
    )
  }
}

export default Header;
