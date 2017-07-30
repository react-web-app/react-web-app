import React from 'react'
import { render } from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import App from '.'

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    document.createElement('div')
  )
})
