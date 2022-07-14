/* eslint-disable no-param-reassign */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  Typography, Container, Paper, TextField, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, MenuItem, InputAdornment, IconButton,
} from '@mui/material';

import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/user-service';
import { getFields, getOccupations, getSpecialisations } from '../../services/category-service';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('Required field')
    .min(1, 'At least one character required')
    .max(64, '64 characters at most')
    .matches(/^[aA-zZ\s]+$/, 'Please only use Latin alphabet and spacing'),

  lastName: Yup.string()
    .required('Required field')
    .min(1, 'At least one character required')
    .max(64, '64 characters at most')
    .matches(/^[aA-zZ\s]+$/, 'Please only use Latin alphabet and spacing'),

  password: Yup.string()
    .required('Required field')
    .min(8, 'Password must be at least 8 characters long')
    .max(24, 'Password must be 24 characters or shorter')
    .matches(/^(?=.*[a-z])/, 'Password must contain at least one lower case letter')
    .matches(/^(?=.*[A-Z])/, 'Password must contain at least one upper case letter')
    .matches(/^(?=.*[0-9])/, 'Password must contain at least one number')
    .matches(/^(?=.*[!@#$%^&*])/, 'Password must contain at least one special character'),

  email: Yup.string()
    .required('Required field')
    .email('Must be a valid email address')
    .max(128, '128 characters at most'),

  age: Yup.number()
    .required('Required field')
    .min(16, 'Must be 16 or older')
    .max(120, 'Must be 120 years old or younger'),

  gender: Yup.string()
    .required('Required field'),

  field: Yup.object()
    .required('Required field'),

  specialisation: Yup.object()
    .required('Required field'),

  occupation: Yup.object()
    .required('Required field'),
});

const UserCreationPage = () => {
  const [fields, setFields] = useState([]);
  const [specialisations, setSpecialisations] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getFields().then(
      (res) => {
        setFields(res.data);
      },
      (error) => {
        throw error;
      },
    );
  }, []);

  useEffect(() => {
    getSpecialisations().then(
      (res) => {
        setSpecialisations(res.data);
      },
      (error) => {
        throw error;
      },
    );
  }, []);

  useEffect(() => {
    getOccupations().then(
      (res) => {
        setOccupations(res.data);
      },
      (error) => {
        throw error;
      },
    );
  }, []);

  const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    age: 0,
    gender: '',
    field: '',
    specialisation: '',
    occupation: '',
    showPassword: false,
  };

  const handleCreateUser = (firstName, lastName, password, email, age, gender, field, specialisation, occupation) => {
    createUser(firstName, lastName, password, email, age, gender, field, specialisation, occupation);
    navigate('/');
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleCreateUser,
  });

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      mb: '1rem',
    }}
    >
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        py: '2rem',
      }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', mb: '2rem' }}>
          User Creation
        </Typography>
        <Container>
          <Formik>
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
            onSubmit={handleSubmit}
          >
            <TextField
            name='firstName'
            type="text"
            label="First name"
            value={values.firstName}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName ? touched.firstName && errors.firstName : null}
            />
            <TextField
            name='lastName'
            type="text"
            label="Last name"
            value={values.lastName}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName ? touched.lastName && errors.lastName : null}
            />
            <TextField
            name='password'
            type={showHidePassword ? 'text' : 'password'}
            label="Password"
            value={values.password}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password ? touched.password && errors.password : null}
            InputProps={{
              endAdornment:
              <InputAdornment position="end">
              <IconButton
              onClick={() => changeShowHidePassword(!showHidePassword)}
              >
              {showHidePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              </InputAdornment>,
            }}
            />
            <TextField
            name='email'
            type="email"
            label="Email"
            value={values.email}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email ? touched.email && errors.email : null}
            />
            <TextField
            name='age'
            type="number"
            label="Age"
            value={values.age}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.age && Boolean(errors.age)}
            helperText={touched.age && errors.age ? touched.age && errors.age : null}
            />
            <FormControl required>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row >
                <FormControlLabel name='gender' value='male' control={<Radio />} label="Male" checked={values.gender === 'male'} onChange={() => setFieldValue('gender', 'male')} />
                <FormControlLabel name='gender' value='female' control={<Radio />} label="Female" checked={values.gender === 'female'} onChange={() => setFieldValue('gender', 'female')} />
                <FormControlLabel name='gender' value='other' control={<Radio />} label="Other" checked={values.gender === 'other'} onChange={() => setFieldValue('gender', 'other')} />
              </RadioGroup>
            </FormControl>
            <TextField
            select
            name='field'
            label="Select a field"
            onBlur={handleBlur}
            onChange={handleChange}
            helperText="Please select a field"
            variant="outlined"
            defaultValue=""
            >
              {
                fields.map((field) => <MenuItem key={field.id} value={field}>{field.title}</MenuItem>)
              }
            </TextField>
            <TextField
            select
            name='specialisation'
            label="Select a specialisation"
            onBlur={handleBlur}
            onChange={handleChange}
            helperText="Please select a specialisation"
            variant="outlined"
            defaultValue=""
            >
             {
              (values.field)
                ? specialisations.filter((specialisation) => specialisation.fieldId === values.field.id).map((specialisation) => <MenuItem key={specialisation.id} value={specialisation}>{specialisation.title}</MenuItem>) : <MenuItem value={{}} disabled>Please select a field first</MenuItem>
              }
            </TextField>
            <TextField
            select
            name='occupation'
            label="Select an occupation"
            onBlur={handleBlur}
            onChange={handleChange}
            helperText="Please select an occupation"
            variant="outlined"
            defaultValue=""
            >
              {
                (values.specialisation)
                  ? occupations.filter((occupation) => occupation.specialisationId === values.specialisation.id).map((occupation) => <MenuItem key={occupation.id} value={occupation}>{occupation.title}</MenuItem>) : <MenuItem value={{}} disabled>Please select a specialisation first</MenuItem>
              }
            </TextField>
            <Button type="submit" variant="outlined" sx={{
              ':hover': {
                color: 'primary.dark',
              },
            }}>Create New User</Button>
          </Form>
          </Formik>
        </Container>
      </Paper>
    </Container>
  );
};

export default UserCreationPage;
