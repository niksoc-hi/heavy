import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'

function init() {
  return {
    allPosts: [],
    currentUserPosts: [],
  }
}

export const postsReducer = (state = init(), action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: _.get(action, 'data', []),
      }
    case ActionTypes.GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        [action.data.id]: action.data,
      }

    case ActionTypes.GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        currentUserPosts: _.get(action, 'data', []),
      }
    default:
      return state
  }
}
