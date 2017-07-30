import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Counter from '../Counter'

const App = () =>
  <div className="container">
    <Nav />
    <hr />
    <Route exact path="/" render={() => <h3>Home</h3>} />
    <Route path="/counter" component={Counter} />
  </div>

export default App
