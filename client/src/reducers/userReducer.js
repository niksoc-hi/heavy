import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'

function init() {
  return {
    currentUser: {},
  }
}

export const userReducer = (state = init(), action) => {
  switch (action.type) {
    case ActionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: _.get(action, 'data', {}),
      }
    default:
      return state
  }
}
