// @ts-nocheck
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const getFields = () => axios.get(`${API_URL}fields`);
const getSpecialisations = () => axios.get(`${API_URL}specialisations`);
const getOccupations = () => axios.get(`${API_URL}occupations`);

const createField = ({ title }) => axios.post(`${API_URL}fields`, {
  title,
});

const createSpecialisation = ({ title, fieldId }) => axios.post(`${API_URL}specialisations`, {
  title, fieldId,
});

const createOccupation = ({ title, specialisationId }) => axios.post(`${API_URL}occupations`, {
  title, specialisationId,
});

export {
  getFields,
  getSpecialisations,
  getOccupations,
  createField,
  createSpecialisation,
  createOccupation,
};
