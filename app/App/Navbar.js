import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div className="container">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/" exact>
          Home
        </NavLink>
        <NavLink className="nav-item nav-link" to="/counter" exact>
          Counter
        </NavLink>
      </div>
    </div>
  </nav>
)

export default Nav
