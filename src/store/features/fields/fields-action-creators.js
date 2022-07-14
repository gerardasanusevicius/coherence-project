/* eslint-disable no-unused-vars */
// @ts-nocheck
import {
  CREATE_NEW_FIELD_SUCCESS,
  CREATE_NEW_FIELD_FAIL,
} from './fields-action-types';
import { createField } from '../../../services/category-service';

const createFieldAction = (title) => (dispatch) => createField(title).then(
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

export default createFieldAction;
