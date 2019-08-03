import ActionTypes from '../constants/actionTypes'
import _ from '../utils/lodashUtils'

function init() {
  return {
    allPosts: [],
  }
}

export const postsReducer = (state = init(), action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: _.get(action, 'data', []),
      }
    default:
      return state
  }
}
