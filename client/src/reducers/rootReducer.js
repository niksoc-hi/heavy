import { combineReducers } from 'redux'
import { activityIndicatorReducer } from './activityIndicatorReducer'
import { postsReducer } from './postReducer'
import { notificationsReducer } from './notificationsReducer'
import noteReducer from './noteReducer'

export default combineReducers({
  activityIndicator: activityIndicatorReducer,
  posts: postsReducer,
  notifications: notificationsReducer,
  notes: noteReducer,
})
