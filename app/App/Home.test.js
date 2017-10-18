import React from 'react'
import { render } from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import Home from './Home'

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
    document.createElement('div')
  )
})
