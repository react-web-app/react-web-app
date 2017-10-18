import React from 'react'
import { render } from 'react-dom'
import { shallow } from 'enzyme'

import { Counter } from '.'

describe('Counter component', () => {
  const props = {
    count: 123,
    increment: jest.fn(),
    decrement: jest.fn(),
  }
  const wrapper = shallow(<Counter {...props} />)
  const buttons = wrapper.find('button')
  const count = wrapper.find('.counter-count')

  it('renders without crashing', () => {
    render(<Counter />, document.createElement('div'))
  })

  it('should render children', () => {
    expect(buttons.length).toBe(4)
    expect(count.length).toBe(1)
    expect(count.text()).toBe(props.count.toString())
  })

  it('should call event handlers', () => {
    buttons.at(0).simulate('click')
    expect(props.decrement.mock.calls.length).toBe(1)
    expect(props.decrement.mock.calls[0]).toEqual([2])

    buttons.at(1).simulate('click')
    expect(props.decrement.mock.calls.length).toBe(2)
    expect(props.decrement.mock.calls[1]).toEqual([1])

    buttons.at(2).simulate('click')
    expect(props.increment.mock.calls.length).toBe(1)
    expect(props.increment.mock.calls[0]).toEqual([1])

    buttons.at(3).simulate('click')
    expect(props.increment.mock.calls.length).toBe(2)
    expect(props.increment.mock.calls[1]).toEqual([2])
  })
})
