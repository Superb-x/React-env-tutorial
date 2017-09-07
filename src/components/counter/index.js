import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props){
        super(props);
        this.increaseAsync = this.increaseAsync.bind(this);
        this.increaseIfOdd = this.increaseIfOdd.bind(this);
    }

    componentWillMount() {
        console.log(this.props.value)
    }

    increaseIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }
    increaseAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const {value, onIncrement, onDecrement} = this.props
        return (
            <div>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={this.increaseIfOdd}>if odd</button>
                {' '}
                <button onClick={this.increaseAsync}>incrrement async</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter