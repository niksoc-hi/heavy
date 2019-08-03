import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'

function init() {
  return {
    allNotifications: [],
  }
}

export const notificationsReducer = (state = init(), action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        allNotifications: _.get(action, 'data', []),
      }
    default:
      return state
  }
}
