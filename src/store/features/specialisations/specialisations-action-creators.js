/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  CREATE_NEW_SPECIALISATION_SUCCESS,
  CREATE_NEW_SPECIALISATION_FAIL,
} from './specialisations-action-types';
import { createSpecialisation } from '../../../services/category-service';

const createSpecialisationAction = (title, field) => (dispatch) => createSpecialisation(title, field).then(
  (response) => {
    dispatch({
      type: CREATE_NEW_SPECIALISATION_SUCCESS,
    });
    return Promise.resolve();
  },
  (error) => {
    dispatch({
      type: CREATE_NEW_SPECIALISATION_FAIL,
    });
    return Promise.reject();
  },
);

export default createSpecialisationAction;
