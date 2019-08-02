import ActionTypes from '../constants/actionTypes';

const SIMPLE_ACTION = payload => {
  return {
    type: ActionTypes.SIMPLE_ACTION,
    payload,
  };
};

export const simpleAction = () => {
  return async dispatch => {
    dispatch(SIMPLE_ACTION('simple action payload'));
  };
};
