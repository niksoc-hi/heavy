import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'

function init() {
  return {
    currentUser: {},
    userProfile: {},
    allUsers: [],
  }
}

export const userReducer = (state = init(), action) => {
  switch (action.type) {
    case ActionTypes.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: _.get(action, 'data', {}),
      }
    case ActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: _.get(action, 'data', {}),
      }
    case ActionTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: _.get(action, 'data', []),
      }
    default:
      return state
  }
}
