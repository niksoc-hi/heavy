import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'

function init() {
  return {
    requests: {},
  }
}

const removeKeyFromObject = (obj, key) => {
  const newObj = { ...obj }
  delete newObj[key]
  return newObj
}

export const activityIndicatorReducer = (state = init(), action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ACTIVITY_INDICATOR:
      return {
        ...state,
        requests: {
          ..._.get(state, 'requests', {}),
          [_.get(action, 'data', '')]: true,
        },
      }
    case ActionTypes.HIDE_ACTIVITY_INDICATOR:
      return {
        ...state,
        requests: removeKeyFromObject(
          _.get(state, 'requests', {}),
          _.get(action, 'data', '')
        ),
      }
    default:
      return state
  }
}
