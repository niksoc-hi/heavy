import { combineReducers } from 'redux'
import { activityIndicatorReducer } from './activityIndicatorReducer'
export default combineReducers({
  activityIndicator: activityIndicatorReducer,
})
