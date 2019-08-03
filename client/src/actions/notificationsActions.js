import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'
import { notification } from 'antd'
import API from '../API/API'

const GET_ALL_NOTIFICATIONS_SUCCESS = data => {
  return {
    type: ActionTypes.GET_ALL_NOTIFICATIONS_SUCCESS,
    data,
  }
}

const GET_ALL_NOTIFICATIONS_FAILURE = error => {
  return {
    type: ActionTypes.GET_ALL_NOTIFICATIONS_FAILURE,
    error,
  }
}

const GET_NOTIFICATIONS_UNREAD_COUNT_SUCCESS = data => {
  return {
    type: ActionTypes.GET_ALL_NOTIFICATIONS_UNREAD_COUNT_SUCCESS,
    data,
  }
}

const GET_ALL_NOTIFICATIONS_UNREAD_COUNT_FAILURE = error => {
  return {
    type: ActionTypes.GET_ALL_NOTIFICATIONS_UNREAD_COUNT_FAILURE,
    error,
  }
}

export const getAllNotifications = () => {
  return async dispatch => {
    try {
      const url = `api/v1/notifications/`
      const response = await API.get(url)
      console.log(response, 'resp')
      dispatch(GET_ALL_NOTIFICATIONS_SUCCESS(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}
