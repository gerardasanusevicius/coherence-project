/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  CREATE_NEW_OCCUPATION_SUCCESS,
  CREATE_NEW_OCCUPATION_FAIL,
  FETCH_OCCUPATIONS_SUCCESS,
  FETCH_OCCUPATIONS_FAILURE,
} from './occupations-action-types';
import { createOccupation, fetchOccupations } from '../../../services/category-api-service';

export const createOccupationAction = (title, field, specialisation) => (dispatch) => createOccupation(title, field, specialisation).then(
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

const createFetchOccupationsSuccessAction = (occupations) => ({
  type: FETCH_OCCUPATIONS_SUCCESS,
  payload: occupations,
});

const createFetchOccupationsFailureAction = (error) => ({
  type: FETCH_OCCUPATIONS_FAILURE,
  payload: { error },
});

export const fetchOccupationsThunkAction = async (dispatch) => {
  try {
    const fetchingOccupations = await fetchOccupations();
    const fetchOccupationsSuccessAction = createFetchOccupationsSuccessAction(fetchingOccupations);
    dispatch(fetchOccupationsSuccessAction);
  } catch (error) {
    const errMsg = error ? error.message : error;
    const fetchOccupationsFailureAction = createFetchOccupationsFailureAction(errMsg);
    dispatch(fetchOccupationsFailureAction);
  }
};
