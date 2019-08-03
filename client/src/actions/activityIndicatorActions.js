import * as ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'

export const SHOW_ACTIVITY_INDICATOR = data => {
  return {
    data,
    type: ActionTypes.SHOW_ACTIVITY_INDICATOR,
  }
}

export const HIDE_ACTIVITY_INDICATOR = data => {
  return {
    data,
    type: ActionTypes.HIDE_ACTIVITY_INDICATOR,
  }
}
