// @ts-nocheck
import {
  CREATE_NEW_OCCUPATION_SUCCESS,
  CREATE_NEW_OCCUPATION_FAIL,
} from './occupations-action-types';

const initialState = {};
const occupationReducer = (action, state = initialState) => {
  const type = action;
  switch (type) {
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

export default occupationReducer;
