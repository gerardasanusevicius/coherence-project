// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  Typography, Container, Paper, TextField, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, MenuItem,
} from '@mui/material';

import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/user-service';
import { getFields, getOccupations, getSpecialisations } from '../services/category-service';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('Required field')
    .min(1, 'At least one character required')
    .max(64, '64 characters at most'),

  lastName: Yup.string()
    .required('Required field')
    .min(1, 'At least one character required')
    .max(64, '64 characters at most'),

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

  field: Yup.string()
    .required('Required field'),

  specialisation: Yup.string()
    .required('Required field'),

  occupation: Yup.string()
    .required('Required field'),
});

const UserCreationPage = () => {
  const [fields, setFields] = useState([]);
  const [specialisations, setSpecialisations] = useState([]);
  const [occupations, setOccupations] = useState([]);
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
  };

  const handleCreateUser = (firstName, lastName, password, email, age, gender, field, specialisation, occupation) => {
    createUser(firstName, lastName, password, email, age, gender, field, specialisation, occupation);
    navigate('/');
  };

  const formik = useFormik({
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
            onSubmit={formik.handleSubmit}
          >
            <TextField
            name='firstName'
            type="text"
            label="First name"
            value={formik.values.firstName}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName ? formik.touched.firstName && formik.errors.firstName : null}
            required
            />
            <TextField
            name='lastName'
            type="text"
            label="Last name"
            value={formik.values.lastName}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName ? formik.touched.lastName && formik.errors.lastName : null}
            required
            />
            <TextField
            name='password'
            type="password"
            label="Password"
            value={formik.values.password}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password ? formik.touched.password && formik.errors.password : null}
            required
            />
            <TextField
            name='email'
            type="email"
            label="Email"
            value={formik.values.email}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email ? formik.touched.email && formik.errors.email : null}
            required
            />
            <TextField
            name='age'
            type="number"
            label="Age"
            value={formik.values.age}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age ? formik.touched.age && formik.errors.age : null}
            required
            />
            <FormControl required>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row >
                <FormControlLabel name='gender' value='male' control={<Radio />} label="Male" checked={formik.values.gender === 'male'} onChange={() => formik.setFieldValue('gender', 'male')} />
                <FormControlLabel name='gender' value='female' control={<Radio />} label="Female" checked={formik.values.gender === 'female'} onChange={() => formik.setFieldValue('gender', 'female')} />
                <FormControlLabel name='gender' value='other' control={<Radio />} label="Other" checked={formik.values.gender === 'other'} onChange={() => formik.setFieldValue('gender', 'other')} />
              </RadioGroup>
            </FormControl>
            <TextField
            select
            name='field'
            label="Select a field"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText="Please select a field"
            variant="outlined"
            defaultValue=""
            >
              {
                fields.map((field) => <MenuItem key={field.id} value={field.title}>{field.title}</MenuItem>)
              }
            </TextField>
            <TextField
            select
            name='specialisation'
            label="Select a specialisation"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText="Please select a specialisation"
            variant="outlined"
            defaultValue=""
            >
             {
             specialisations.map((specialisation) => <MenuItem key={specialisation.id} value={specialisation.title}>{specialisation.title}</MenuItem>)
              }
            </TextField>
            <TextField
            select
            name='occupation'
            label="Select an occupation"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText="Please select an occupation"
            variant="outlined"
            defaultValue=""
            >
              {
                occupations.map((occupation) => <MenuItem key={occupation.id} value={occupation.title}>{occupation.title}</MenuItem>)
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
