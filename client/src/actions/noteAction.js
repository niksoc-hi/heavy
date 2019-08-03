import ActionTypes from '../constants/actionTypes'

const ADD_NOTE = payload => {
  return {
    type: ActionTypes.ADD_NOTE,
    payload,
  }
}

export const noteAction = note => {
  return async dispatch => {
    dispatch(ADD_NOTE(note))
  }
}
