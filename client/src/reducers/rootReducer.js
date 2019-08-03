import { combineReducers } from 'redux'
import { activityIndicatorReducer } from './activityIndicatorReducer'
import { postsReducer } from './postReducer'
export default combineReducers({
  activityIndicator: activityIndicatorReducer,
  posts: postsReducer,
})
