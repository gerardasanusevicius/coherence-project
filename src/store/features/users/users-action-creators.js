/* eslint-disable no-unused-vars */
// @ts-nocheck
import { createUser } from '../../../services/user-service';
import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
} from './users-action-types';

const createUserAction = (firstName, lastName, password, email, age, gender, field, specialisation, occupation) => (dispatch) => createUser(firstName, lastName, password, email, age, gender, field, specialisation, occupation).then(

  (response) => {
    dispatch({
      type: CREATE_NEW_USER_SUCCESS,
    });
    return Promise.resolve();
  },
  (error) => {
    dispatch({
      type: CREATE_NEW_USER_FAIL,
    });
    return Promise.reject();
  },
);

export default createUserAction;
