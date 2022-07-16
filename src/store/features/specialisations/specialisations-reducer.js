/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
// @ts-nocheck
import {
  CREATE_NEW_SPECIALISATION_SUCCESS,
  CREATE_NEW_SPECIALISATION_FAIL,
  FETCH_SPECIALISATIONS_SUCCESS,
  FETCH_SPECIALISATIONS_FAILURE,
} from './specialisations-action-types';

const initialState = {
  specialisations: [],
  error: null,
};

export const specialisationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPECIALISATIONS_SUCCESS: {
      return {
        ...state,
        specialisations: action.payload,
      };
    }

    case FETCH_SPECIALISATIONS_FAILURE: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    case CREATE_NEW_SPECIALISATION_SUCCESS:
      return {
        ...state,
      };
    case CREATE_NEW_SPECIALISATION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
