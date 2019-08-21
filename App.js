import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onCountNumber={this.props.onCountNumber}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onCountNumber: () => dispatch(countNumber())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);