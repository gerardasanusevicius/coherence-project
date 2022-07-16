/* eslint-disable no-unused-vars */
// @ts-nocheck
import { createUser, fetchUsers } from '../../../services/user-api-service';
import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './users-action-types';

export const createUserAction = (firstName, lastName, password, email, age, gender, field, specialisation, occupation) => (dispatch) => createUser(firstName, lastName, password, email, age, gender, field, specialisation, occupation).then(

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

const createFetchUsersSuccessAction = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const createFetchUsersFailureAction = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

export const fetchUsersThunkAction = async (dispatch) => {
  try {
    const fetchingUsers = await fetchUsers();
    const fetchUsersSuccessAction = createFetchUsersSuccessAction(fetchingUsers);
    dispatch(fetchUsersSuccessAction);
  } catch (error) {
    const errMsg = error ? error.message : error;
    const fetchUsersFailureAction = createFetchUsersFailureAction(errMsg);
    dispatch(fetchUsersFailureAction);
  }
};
