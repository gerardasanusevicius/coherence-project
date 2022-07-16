/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
// @ts-nocheck
import {
  CREATE_NEW_FIELD_SUCCESS,
  CREATE_NEW_FIELD_FAIL,
  FETCH_FIELDS_SUCCESS,
  FETCH_FIELDS_FAILURE,
} from './fields-action-types';

const initialState = {
  fields: [],
  error: null,
};

export const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FIELDS_SUCCESS: {
      return {
        ...state,
        fields: action.payload,
      };
    }

    case FETCH_FIELDS_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    case CREATE_NEW_FIELD_SUCCESS:
      return {
        ...state,
      };
    case CREATE_NEW_FIELD_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
