// @ts-nocheck
import React, { useEffect } from 'react';
import {
  Typography, Container, Paper, TextField, Button, MenuItem,
} from '@mui/material';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { createSpecialisationAction } from '../../store/features/specialisations/specialisations-action-creators';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectFields } from '../../store/selectors';
import { fetchFieldsThunkAction } from '../../store/features/fields/fields-action-creators';

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Required field')
    .min(2, 'At least two characters required')
    .max(32, '32 characters at most')
    .matches(/^[aA-zZ\s]+$/, 'Please only use Latin alphabet and spacing'),

  field: Yup.object()
    .required('Required field'),
});

const SpecialisationCreationPage = () => {
  const fields = useRootSelector(selectFields);
  const navigate = useNavigate();
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(fetchFieldsThunkAction);
  }, []);

  const initialValues = {
    title: '',
    field: '',
  };

  const handleCreateSpecialisation = (title, field) => {
    const createSpecialisation = createSpecialisationAction(title, field);
    dispatch(createSpecialisation);
    navigate('/category-creation');
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleCreateSpecialisation,
  });

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
          Specialisation Creation
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
                (fields)
                  ? fields.map((field) => <MenuItem key={field.id} value={field}>{field.title}</MenuItem>)
                  : <Typography>loading...</Typography>
              }
            </TextField>
            <TextField
            name='title'
            type="text"
            label="Specialisation title"
            value={values.title}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title ? touched.title && errors.title : null}
            />
            <Button type="submit" variant="outlined" sx={{
              ':hover': {
                color: 'primary.dark',
              },
            }}>Create New Specialisation</Button>
          </Form>
          </Formik>
        </Container>
      </Paper>
    </Container>
  );
};

export default SpecialisationCreationPage;
