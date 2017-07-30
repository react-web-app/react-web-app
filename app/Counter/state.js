export const INCREMENT = 'counter/increment'
export const DECREMENT = 'counter/decrement'

export function increment(payload) {
  return { type: INCREMENT, payload }
}

export function decrement(payload) {
  return { type: DECREMENT, payload }
}

export default function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - action.payload
    default:
      return state
  }
}
