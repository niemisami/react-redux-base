import React, { Component } from 'react';

class BeerPong extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }



  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>Beer Pong Stats</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-push-6 col-xs-6 col-xs-push-6">

              <div className="col-lg-6">
                LISTA PELEISTÄ
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default BeerPong;