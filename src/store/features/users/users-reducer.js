// @ts-nocheck
import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
} from './users-action-types';

const initialState = {};

const userReducer = (action, state = initialState) => {
  const type = action;
  switch (type) {
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
      };
    case CREATE_NEW_USER_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
