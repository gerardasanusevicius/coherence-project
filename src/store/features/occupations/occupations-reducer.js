/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
// @ts-nocheck
import {
  CREATE_NEW_OCCUPATION_SUCCESS,
  CREATE_NEW_OCCUPATION_FAIL,
  FETCH_OCCUPATIONS_SUCCESS,
  FETCH_OCCUPATIONS_FAILURE,
} from './occupations-action-types';

const initialState = {
  occupations: [],
  error: null,
};

export const occupationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OCCUPATIONS_SUCCESS: {
      return {
        ...state,
        occupations: action.payload,
      };
    }

    case FETCH_OCCUPATIONS_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    case CREATE_NEW_OCCUPATION_SUCCESS:
      return {
        ...state,
      };
    case CREATE_NEW_OCCUPATION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
