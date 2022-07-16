// @ts-nocheck
import axios from 'axios';
import ApiService, { API_URL, formatError } from './api-service';

const fetchFields = async () => {
  try {
    const { data } = await ApiService.get(`${API_URL}fields`);
    return data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const fetchSpecialisations = async () => {
  try {
    const { data } = await ApiService.get(`${API_URL}specialisations`);
    return data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const fetchOccupations = async () => {
  try {
    const { data } = await ApiService.get(`${API_URL}occupations`);
    return data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const createField = ({ title }) => axios.post(`${API_URL}fields`, {
  title,
});

const createSpecialisation = ({ title, field }) => axios.post(`${API_URL}specialisations`, {
  title, fieldId: field.id,
});

const createOccupation = ({ title, specialisation }) => axios.post(`${API_URL}occupations`, {
  title, specialisationId: specialisation.id,
});

export {
  fetchFields,
  fetchSpecialisations,
  fetchOccupations,
  createField,
  createSpecialisation,
  createOccupation,
};
