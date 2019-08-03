const ActionTypes = {
  SIMPLE_ACTION: 'SIMPLE_ACTION',

  SHOW_ACTIVITY_INDICATOR: 'SHOW_ACTIVITY_INDICATOR',
  HIDE_ACTIVITY_INDICATOR: 'HIDE_ACTIVITY_INDICATOR',

  GET_ALL_POSTS_SUCCESS: 'GET_ALL_POSTS_SUCCESS',
  GET_ALL_POSTS_FAILURE: 'GET_ALL_POSTS_FAILURE',
  GET_POST_DETAIL_SUCCESS: 'GET_POST_DETAIL_SUCCESS',
  GET_POST_DETAIL_FAILURE: 'GET_POST_DETAIL_FAILURE',
  CREATE_USER_POST_SUCCESS: 'CREATE_USER_POST_SUCCESS',
  GET_USER_POSTS_SUCCESS: 'GET_USER_POSTS_SUCCESS',
  GET_USER_POSTS_FAILURE: 'GET_USER_POSTS_FAILURE',
  UPVOTE_POST_SUCCESS: 'UPVOTE_POST_SUCCESS',
  UPVOTE_POST_FAILURE: 'UPVOTE_POST_FAILURE',
  DOWNVOTE_POST_SUCCESS: 'DOWNVOTE_POST_SUCCESS',
  DOWNVOTE_POST_FAILURE: 'DOWNVOTE_POST_FAILURE',

  GET_ALL_NOTIFICATIONS_SUCCESS: 'GET_ALL_NOTIFICATIONS_SUCCESS',
  GET_ALL_NOTIFICATIONS_FAILURE: 'GET_ALL_NOTIFICATIONS_FAILURE',
  GET_NOTIFICATION_UNREAD_COUNT_SUCCESS:
    'GET_NOTIFICATION_UNREAD_COUNT_SUCCESS',
  GET_NOTIFICATION_UNREAD_COUNT_FAILURE:
    'GET_NOTIFICATION_UNREAD_COUNT_FAILURE',

  ADD_NOTE: 'ADD_NOTE',
  GET_NOTE: 'GET_NOTE',
  FETCH_NOTES: 'FETCH_NOTES',
  DELETE_NOTE: 'DELETE_NOTE',
  GET_CURRENT_USER_SUCCESS: 'GET_CURRENT_USER_SUCCESS',
  GET_CURRENT_USER_FAILURE: 'GET_CURRENT_USER_FAILURE',
}

export default ActionTypes
