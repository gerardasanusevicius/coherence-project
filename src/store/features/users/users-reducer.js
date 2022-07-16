/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
// @ts-nocheck
import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from './users-action-types';

const initialState = {
  users: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

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
