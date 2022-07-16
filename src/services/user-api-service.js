// @ts-nocheck
import axios from 'axios';
import ApiService, { API_URL, formatError } from './api-service';

const fetchUsers = async () => {
  try {
    const { data } = await ApiService.get(`${API_URL}users`);
    return data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const createUser = ({
  firstName, lastName, password, email, age, gender, field, specialisation, occupation,
}) => axios.post(`${API_URL}users`, {
  firstName,
  lastName,
  password,
  email,
  age,
  gender,
  field: field.title,
  specialisation: specialisation.title,
  occupation: occupation.title,
});

export {
  fetchUsers,
  createUser,
};
