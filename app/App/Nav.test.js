import React from 'react'
import { render } from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import Nav from './Nav'

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>,
    document.createElement('div')
  )
})
