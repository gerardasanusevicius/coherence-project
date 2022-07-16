/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  CREATE_NEW_SPECIALISATION_SUCCESS,
  CREATE_NEW_SPECIALISATION_FAIL,
  FETCH_SPECIALISATIONS_SUCCESS,
  FETCH_SPECIALISATIONS_FAILURE,
} from './specialisations-action-types';
import { createSpecialisation, fetchSpecialisations } from '../../../services/category-api-service';

export const createSpecialisationAction = (title, field) => (dispatch) => createSpecialisation(title, field).then(
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

const createFetchSpecialisationsSuccessAction = (specialisations) => ({
  type: FETCH_SPECIALISATIONS_SUCCESS,
  payload: specialisations,
});

const createFetchSpecialisationsFailureAction = (error) => ({
  type: FETCH_SPECIALISATIONS_FAILURE,
  payload: { error },
});

export const fetchSpecialisationsThunkAction = async (dispatch) => {
  try {
    const fetchingSpecialisations = await fetchSpecialisations();
    const fetchSpecialisationsSuccessAction = createFetchSpecialisationsSuccessAction(fetchingSpecialisations);
    dispatch(fetchSpecialisationsSuccessAction);
  } catch (error) {
    const errMsg = error ? error.message : error;
    const fetchSpecialisationsFailureAction = createFetchSpecialisationsFailureAction(errMsg);
    dispatch(fetchSpecialisationsFailureAction);
  }
};
