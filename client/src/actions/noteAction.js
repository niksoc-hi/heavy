import ActionTypes from '../constants/actionTypes'
import API from '../API/API'
import axios from 'axios'

const url = 'https://heavy-workplace.herokuapp.com/'

const CSRF = '3fTLuxrIoR4gMLFbufrLcKGBrmis7P2uSqOmQLMPtqh2CZI6AS2mFAHVkdpDQvAK'

const ADD_NOTE = payload => {
  return {
    type: ActionTypes.ADD_NOTE,
    payload,
  }
}

const FETCH_NOTES = payload => {
  return {
    type: ActionTypes.FETCH_NOTES,
    payload,
  }
}

const DELETE_NOTE = payload => {
  return {
    type: ActionTypes.DELETE_NOTE,
    payload: payload,
  }
}

const GET_NOTE = payload => {
  return {
    type: ActionTypes.GET_NOTE,
    payload,
  }
}

export const getNoteAction = note => {
  return async dispatch => {
    dispatch(GET_NOTE(note))
  }
}

export const noteAction = note => {
  return async dispatch => {
    try{
      const url = `api/v1/notes/`
      const response = await API.post(url, note)
      dispatch(ADD_NOTE({ ...response.data }))
    }catch (error) {
      console.log(error)
    }
  }
}

export const fetchNotesAction = () => {
  return async dispatch => {
    try {
      const url = `api/v1/notes/`
      const response = await API.get(url)
      console.log(response, 'resp')
      dispatch(FETCH_NOTES(response))
    }catch (error) {
      console.log(error)
    }
  }
}

export const deleteNoteAction = id => {
  return async dispatch => {
    try {
      const url = `api/v1/notes/${id}/` 
      const response = await API.delete(url)
      dispatch(DELETE_NOTE(id))
    } catch (error) {
      console.log(error)
    }
   }
} 

