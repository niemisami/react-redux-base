import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import ProductsContainer from './ProductsContainer';

class MordorMarket extends Component {


  constructor(props) {
    super(props)
  } 

  componentDidMount() {

    // let socket = io.connect();
    // socket.on('onlineUsers', (data) => {
    //   this.setState({
    //     onlineUsers: data.onlineUsers
    //   });
    // });
  }



  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>MordorMarket 2.0</h1>
              <p>Käyttäjiä linjoilla: {0}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-push-6 col-xs-6 col-xs-push-6">

              <div className="col-lg-6">
                <ShoppingCart />
              </div>

              {/*<div className="col-lg-6">
                <Users />
              </div>*/}

            </div>
            <div className="col-md-6 col-md-pull-6 col-xs-6 col-xs-pull-6">
              <ProductsContainer />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default MordorMarket;