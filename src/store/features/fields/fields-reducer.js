// @ts-nocheck
import {
  CREATE_NEW_FIELD_SUCCESS,
  CREATE_NEW_FIELD_FAIL,
} from './fields-action-types';

const initialState = {};
const fieldReducer = (action, state = initialState) => {
  const type = action;
  switch (type) {
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

export default fieldReducer;
