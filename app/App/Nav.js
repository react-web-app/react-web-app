import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () =>
  <div className="app-nav">
    <Link to="/">Home</Link>
    <Link to="/counter">Counter</Link>
  </div>

export default Nav
