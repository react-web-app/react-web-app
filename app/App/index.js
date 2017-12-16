import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Counter from '../Counter'

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </div>
  </div>
)

export default App
