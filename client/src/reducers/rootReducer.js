import { combineReducers } from 'redux'
import simpleReducer from './simpleReducer'
import noteReducer from './noteReducer'

export default combineReducers({
  simpleReducer,
  notes: noteReducer,
})
