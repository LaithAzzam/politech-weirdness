
import { ActionTypes } from './actions'

export const initialState = {}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case ActionTypes.SET_ACTIVE_MODAL:
      return Object.assign({}, state, { activeModal: action.modal })
    case ActionTypes.SET_LIKED_IMAGES:
      return Object.assign({}, state, { likedImages: action.images })
  }

  return state
}
