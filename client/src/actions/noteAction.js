import ActionTypes from '../constants/actionTypes'
import axios from 'axios'

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

const DELETE_NOTE = id => {
  return {
    type: ActionTypes.DELETE_NOTE,
    payload: id,
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
    axios
      .post(
        'http://localhost:8000/api/v1/notes/',
        { ...note },
        {
          headers: {
            'X-CSRFTOKEN':
              '3fTLuxrIoR4gMLFbufrLcKGBrmis7P2uSqOmQLMPtqh2CZI6AS2mFAHVkdpDQvAK',
          },
        }
      )
      .then(response => {
        dispatch(ADD_NOTE({ ...response.data }))
      })
      .catch(err => {
        console.log(err)
      })

    // dispatch(ADD_NOTE(note))
  }
}

export const fetchNotesAction = () => {
  return async dispatch => {
    axios
      .get('http://localhost:8000/api/v1/notes/', {
        headers: {
          'X-CSRFTOKEN':
            '3fTLuxrIoR4gMLFbufrLcKGBrmis7P2uSqOmQLMPtqh2CZI6AS2mFAHVkdpDQvAK',
        },
      })
      .then(response => {
        dispatch(FETCH_NOTES(response))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const deleteNoteAction = id => {
  return async dispatch => {
    axios
      .delete(`http://localhost:8000/api/v1/notes/${id}/`, {
        headers: {
          'X-CSRFTOKEN':
            '3fTLuxrIoR4gMLFbufrLcKGBrmis7P2uSqOmQLMPtqh2CZI6AS2mFAHVkdpDQvAK',
        },
      })
      .then(() => {
        dispatch(DELETE_NOTE(id))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
