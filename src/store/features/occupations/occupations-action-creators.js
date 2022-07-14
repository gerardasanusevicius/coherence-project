/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  CREATE_NEW_OCCUPATION_SUCCESS,
  CREATE_NEW_OCCUPATION_FAIL,
} from './occupations-action-types';
import { createOccupation } from '../../../services/category-service';

const createOccupationAction = (title, field, specialisation) => (dispatch) => createOccupation(title, field, specialisation).then(
  (response) => {
    dispatch({
      type: CREATE_NEW_OCCUPATION_SUCCESS,
    });
    return Promise.resolve();
  },
  (error) => {
    dispatch({
      type: CREATE_NEW_OCCUPATION_FAIL,
    });
    return Promise.reject();
  },
);

export default createOccupationAction;
