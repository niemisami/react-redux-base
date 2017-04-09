import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Counter from './Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';

class HomePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.value });
    }

    increment(event) {
        this.props.actions.increment();
    }
    decrement(event) {
        this.props.actions.decrement();
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>React shit</h1>
                <p>Shitties web framework ever!</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
                <Counter
                    value={this.state.value}
                    onIncrement={this.increment}
                    onDecrement={this.decrement} />
            </div>
        );
    }
}

HomePage.propTypes = {
    value: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        value: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);