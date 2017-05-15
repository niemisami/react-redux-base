import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class BeerPong extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    }
  }



  componentDidMount() {
  }


  handleDateChange = (date) => {
    this.setState({
      startDate: date
    })
  }


  render() {
    return (
      <div>

        <div className="container card">
          <div className="row">
            <div className="col-sm-6">
              <h1>Beer Pong Stats</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-xs-6">

              <div className="col-lg-6">
                <input className="input" placeholder="pelikaveri" />
                <h3>Lopputulos 10 <b>+</b>   <b>-</b></h3>
              </div>
              <div className="col-md-6 col-xs-6">
                <DatePicker
                  className="input"
                  dateFormat="DD/MM/YYYY"
                  placeholderText="Pelipäivä"
                  todayButton="Tänään"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
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