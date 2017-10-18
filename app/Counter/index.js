import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './state'

export const Counter = ({ count, increment, decrement }) => (
  <div className="counter">
    <button onClick={() => decrement(2)}>-2</button>
    <button onClick={() => decrement(1)}>-1</button>
    Count: <span className="counter-count">{count}</span>
    <button onClick={() => increment(1)}>+1</button>
    <button onClick={() => increment(2)}>+2</button>
  </div>
)

export default connect(
  state => ({
    count: state.counter,
  }),
  {
    increment,
    decrement,
  }
)(Counter)
