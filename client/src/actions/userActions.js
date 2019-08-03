import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'
import { notification } from 'antd'
import API from '../API/API'

const GET_CURRENT_USER_SUCCESS = data => {
  return {
    type: ActionTypes.GET_CURRENT_USER_SUCCESS,
    data,
  }
}
const GET_CURRENT_USER_FAILURE = error => {
  return {
    type: ActionTypes.GET_CURRENT_USER_FAILURE,
    error,
  }
}

export const getCurrentUser = () => {
  return async dispatch => {
    try {
      const url = `api/v1/current_user/`
      const response = await API.get(url)
      dispatch(GET_CURRENT_USER_SUCCESS(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}
