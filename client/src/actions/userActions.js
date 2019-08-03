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

const GET_USER_PROFILE_SUCCESS = data => {
  return {
    type: ActionTypes.GET_USER_PROFILE_SUCCESS,
    data,
  }
}
const GET_USER_PROFILE_FAILURE = error => {
  return {
    type: ActionTypes.GET_USER_PROFILE_FAILURE,
    error,
  }
}

export const getUserProfile = userId => {
  return async dispatch => {
    try {
      const url = `api/v1/users/${userId}/`
      const response = await API.get(url)
      dispatch(GET_USER_PROFILE_SUCCESS(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}

const GET_ALL_USERS_SUCCESS = data => {
  return {
    type: ActionTypes.GET_ALL_USERS_SUCCESS,
    data,
  }
}
const GET_ALL_USERS_FAILURE = error => {
  return {
    type: ActionTypes.GET_ALL_USERS_FAILURE,
    error,
  }
}

export const getAllUsers = () => {
  return async dispatch => {
    try {
      const url = `api/v1/users/`
      const response = await API.get(url)
      dispatch(GET_ALL_USERS_SUCCESS(response.data))
    } catch (error) {
      console.log(error)
    }
  }
}
