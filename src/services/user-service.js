// @ts-nocheck
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const getUsers = () => axios.get(`${API_URL}users`);

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
  getUsers,
  createUser,
};
