// @ts-nocheck
import {
  CREATE_NEW_SPECIALISATION_SUCCESS,
  CREATE_NEW_SPECIALISATION_FAIL,
} from './specialisations-action-types';

const initialState = {};
const specialisationReducer = (action, state = initialState) => {
  const type = action;
  switch (type) {
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

export default specialisationReducer;
