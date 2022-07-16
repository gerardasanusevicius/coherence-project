/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  CREATE_NEW_FIELD_SUCCESS,
  CREATE_NEW_FIELD_FAIL,
  FETCH_FIELDS_SUCCESS,
  FETCH_FIELDS_FAILURE,
} from './fields-action-types';
import { createField, fetchFields } from '../../../services/category-api-service';

export const createFieldAction = (title) => (dispatch) => createField(title).then(
  (response) => {
    dispatch({
      type: CREATE_NEW_FIELD_SUCCESS,
    });
    return Promise.resolve();
  },
  (error) => {
    dispatch({
      type: CREATE_NEW_FIELD_FAIL,
    });
    return Promise.reject();
  },
);

const createFetchFieldsSuccessAction = (fields) => ({
  type: FETCH_FIELDS_SUCCESS,
  payload: fields,
});

const createFetchFieldsFailureAction = (error) => ({
  type: FETCH_FIELDS_FAILURE,
  payload: { error },
});

export const fetchFieldsThunkAction = async (dispatch) => {
  try {
    const fetchingFields = await fetchFields();
    const fetchFieldsSuccessAction = createFetchFieldsSuccessAction(fetchingFields);
    dispatch(fetchFieldsSuccessAction);
  } catch (error) {
    const errMsg = error ? error.message : error;
    const fetchFieldsFailureAction = createFetchFieldsFailureAction(errMsg);
    dispatch(fetchFieldsFailureAction);
  }
};
