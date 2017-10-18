import React from 'react'
import { render } from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import Navbar from './Navbar'

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
    document.createElement('div')
  )
})
