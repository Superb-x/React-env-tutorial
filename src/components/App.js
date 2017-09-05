import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/counter'
import styles from '@/style/app.scss'

const mapStateToProps = (state, ownProps) => {
    return state.count
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({ ...actions }, dispatch),
})

class App extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.title}>{this.props.count}</h1>
                <button onClick={this.props.actions.increase}>增加</button>
                <button onClick={this.props.actions.decrease}>减少</button>
                <button onClick={this.props.actions.asyncIncrease}>异步增加</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)