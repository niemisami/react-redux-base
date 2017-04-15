import React from 'react'
import ShoppingCart from './ShoppingCart'
import Products from './Products';
import Users from './Users';

class MordorMarket extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      onlineUsers: 0
    }
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
              <p>Käyttäjiä linjoilla: {this.state.onlineUsers}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-push-6 col-xs-6 col-xs-push-6">

              <div className="col-lg-6">
                <Products />
              </div>

              <div className="col-lg-6">
                <Users />
              </div>

            </div>
            <div className="col-md-6 col-md-pull-6 col-xs-6 col-xs-pull-6">
              <ShoppingCart />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default MordorMarket;