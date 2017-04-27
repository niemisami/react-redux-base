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
            <div className="col-md-6 col-xs-6">

              <div className="col-lg-6">
                <input placeholder="pelikaveri" />
                <h3>Lopputulos 10 <b>+</b>   <b>-</b></h3> 
              </div>
              LISTA PELEISTÄ
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BeerPong;