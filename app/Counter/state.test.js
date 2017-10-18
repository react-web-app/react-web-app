import counter, { increment, decrement, INCREMENT, DECREMENT } from './state'

const initial = 123
const payload = 456

describe('Counter actions', () => {
  it('should create action', () => {
    expect(increment(payload)).toEqual({ type: INCREMENT, payload })
    expect(decrement(payload)).toEqual({ type: DECREMENT, payload })
  })
})

describe('Counter reducer', () => {
  it('should return initial state', () => {
    expect(counter(undefined, { type: 'init' })).toBe(0)
    expect(counter(initial, { type: 'init' })).toBe(initial)
  })

  it('should return new state', () => {
    expect(counter(undefined, increment(payload))).toBe(payload)
    expect(counter(undefined, decrement(payload))).toBe(-payload)
    expect(counter(initial, increment(payload))).toBe(initial + payload)
    expect(counter(initial, decrement(payload))).toBe(initial - payload)
  })
})
