import { combineReducers } from 'redux'

import counter from './Counter/state'

export default function createReducer(reducers = {}) {
  return combineReducers({
    counter,
    ...reducers,
  })
}
