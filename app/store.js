import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from 'redux'

import createReducer from './reducers'

let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export default function createStore(initialState = {}) {
  const middlewares = []
  const enhancers = [applyMiddleware(...middlewares)]

  const store = createReduxStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  )
  store.reducers = {}

  return store
}

export function addReducers(store, reducers) {
  let added = false
  Object.keys(reducers).forEach(key => {
    if ({}.hasOwnProperty.call(store.reducers, key)) return
    store.reducers[key] = reducers[key]
    added = true
  })
  if (!added) return
  store.replaceReducer(createReducer(store.reducers))
}
