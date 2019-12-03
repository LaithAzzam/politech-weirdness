import { setIn } from 'app/utilities'

export const initialState = {}

export default (state = initialState, action) => {
  const { type, payload, key } = action
  if (!type) return state

  if (type === 'GIPHY_GET_SUCCESS') {
    if (!key) return state
    return setIn(state, key, payload)
  }

  return state
}
