// @ts-nocheck
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const getFields = () => axios.get(`${API_URL}fields`);
const getSpecialisations = () => axios.get(`${API_URL}specialisations`);
const getOccupations = () => axios.get(`${API_URL}occupations`);

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
  getFields,
  getSpecialisations,
  getOccupations,
  createField,
  createSpecialisation,
  createOccupation,
};
