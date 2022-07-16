// @ts-nocheck
import axios from 'axios';

export const isResponseError = (err) => Boolean(
  err
  && err.response
  && err.response.data.error,
);

export const formatError = (err) => {
  if (isResponseError(err)) {
    return err.response.data.error;
  } if (err instanceof Error) {
    return err.message;
  }
  return err;
};

export const API_URL = 'http://localhost:8000/';

const ApiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default ApiService;
