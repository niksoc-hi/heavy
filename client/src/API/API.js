import axios from 'axios'
import { API_BASE_URL } from '../app.config'
import {
  SHOW_ACTIVITY_INDICATOR,
  HIDE_ACTIVITY_INDICATOR,
} from '../actions/activityIndicatorActions'
import _ from '../../src/utils/lodashUtils'
import { getStore } from '../index'
import { notification } from 'antd'

const apiHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  X_BUSINESS_VERTICAL: _.get(
    getStore().getState(),
    'authValues.selectedBusinessVertical.value',
    ''
  ),
  X_BUSINESS_LINE: _.get(
    getStore().getState(),
    'authValues.selectedBusinessLine.id',
    ''
  ),
})

class API {
  /**
   * pushes route into request queue and shows activity indicator.
   */
  static fireRequest = route => {
    getStore().dispatch(SHOW_ACTIVITY_INDICATOR(route))
  }
  /**
   * closes request and deletes request from queue.
   */
  static closeRequest = route => {
    getStore().dispatch(HIDE_ACTIVITY_INDICATOR(route))
  }

  static get = (route, headers, baseURL = API_BASE_URL) => {
    const allHeaders = { ...apiHeaders(), ...headers }
    return API.xhr(route, allHeaders, {}, 'get', baseURL)
  }
  static post = (route, params, headers, baseURL = API_BASE_URL) => {
    const allHeaders = { ...apiHeaders(), ...headers }
    return API.xhr(route, allHeaders, params, 'post', baseURL)
  }

  static put = (route, params, headers, stringify, baseURL = API_BASE_URL) => {
    const allHeaders = { ...apiHeaders(), ...headers }
    return API.xhr(route, allHeaders, params, 'put', baseURL, stringify)
  }

  static delete = (route, params, headers, baseURL = API_BASE_URL) => {
    const allHeaders = { ...apiHeaders(), ...headers }
    return API.xhr(route, allHeaders, params, 'delete', baseURL)
  }
  static xhr = (
    route,
    headers,
    params,
    method,
    baseURL = API_BASE_URL,
    stringify = false
  ) => {
    // file object can't be stringified hence using a flag to determine.
    const data = params && stringify ? JSON.stringify(params) : params
    const axiosConfig = {
      method,
      data,
      headers,
      baseURL,
      url: `${route}`,
      timeout: 30000,
      withCredentials: true,
    }
    API.fireRequest(route) // push request into queue.
    return axios(axiosConfig)
      .then(resp => {
        API.closeRequest(route) // remove request from queue when completed.
        return resp
      })
      .catch(error => {
        API.closeRequest(route) // remove request from queue when an error occurs.
        API.axiosError(error)
      })
  }

  static axiosError = error => {
    const AUTH_REDIRECT_WHITELIST = /v1\/changePassword/
    const errorMsg = _.get(error, 'response.data', 'Something Went Wrong.')
    notification.close('APIError')
    notification.error({
      message: 'Something went wrong',
      description: errorMsg,
      key: 'APIError',
    })
    if (
      error.config.baseURL === API_BASE_URL &&
      error.response &&
      error.response.status === 401 &&
      !AUTH_REDIRECT_WHITELIST.test(error.config.url || '')
    ) {
      window.location.href = `${API_BASE_URL}/login`
    } else {
      throw error
    }
  }
}

export default API
