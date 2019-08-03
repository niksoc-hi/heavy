import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'
import { notification } from 'antd'
import API from '../API/API'

const GET_ALL_POSTS_SUCCESS = data => {
  return {
    type: ActionTypes.GET_ALL_POSTS_SUCCESS,
    data,
  }
}

const GET_ALL_POSTS_FAILURE = error => {
  return {
    type: ActionTypes.GET_ALL_POSTS_FAILURE,
    error,
  }
}

const GET_POST_DETAIL_SUCCESS = data => {
  return {
    type: ActionTypes.GET_POST_DETAIL_SUCCESS,
    data,
  }
}

const GET_POST_DETAIL_FAILURE = error => {
  return {
    type: ActionTypes.GET_POST_DETAIL_FAILURE,
    error,
  }
}

const CREATE_USER_POST_SUCCESS = () => {}

const GET_USER_POSTS_SUCCESS = () => {}
const GET_USER_POSTS_FAILURE = () => {}

export const getAllPosts = () => {
  return async dispatch => {
    try {
      const url = `api/v1/posts/`
      const response = await API.get(url)
      console.log(response, 'resp')
      dispatch(GET_ALL_POSTS_SUCCESS(response.data))
    } catch (error) {
      console.log(error)
      dispatch(GET_ALL_POSTS_FAILURE(error))
    }
  }
}


export const getPostDetail = (postId) => {
  return async dispatch => {
    try {
      const url = `api/v1/posts/${postId}/`
      const response = await API.get(url)
      console.log(response, 'resp')
      dispatch(GET_POST_DETAIL_SUCCESS(response.data))
    } catch (error) {
      console.log(error)
      dispatch(GET_POST_DETAIL_FAILURE(error))
    }
  }
}

const UPVOTE_POST_SUCCESS = data => {
  return {
    type: ActionTypes.UPVOTE_POST_SUCCESS,
    data,
  }
}

const UPVOTE_POST_FAILURE = error => {
  return {
    type: ActionTypes.UPVOTE_POST_FAILURE,
    error,
  }
}

export const upVotePost = id => {
  return async dispatch => {
    try {
      const url = `api/v1/posts/${id}/up_vote/`
      const response = await API.get(url)
      console.log(response, 'resp')
      dispatch(UPVOTE_POST_SUCCESS(response.data))
      dispatch(getAllPosts())
    } catch (error) {
      console.log(error)
    }
  }
}

const DOWNVOTE_POST_SUCCESS = data => {
  return {
    type: ActionTypes.DOWNVOTE_POST_SUCCESS,
    data,
  }
}

const DOWNVOTE_POST_FAILURE = error => {
  return {
    type: ActionTypes.DOWNVOTE_POST_FAILURE,
    error,
  }
}

export const downVotePost = id => {
  return async dispatch => {
    try {
      const url = `api/v1/posts/${id}/down_vote/`
      const response = await API.get(url)
      console.log(response, 'resp')

      dispatch(DOWNVOTE_POST_SUCCESS(response.data))
      dispatch(getAllPosts())
    } catch (error) {
      console.log(error)
    }
  }
}
