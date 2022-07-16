// @ts-nocheck
import React, { useEffect } from 'react';
import {
  Typography, Container, Paper, TextField, Button, MenuItem,
} from '@mui/material';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { selectFields, selectSpecialisations } from '../../store/selectors';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { fetchFieldsThunkAction } from '../../store/features/fields/fields-action-creators';
import { fetchSpecialisationsThunkAction } from '../../store/features/specialisations/specialisations-action-creators';
import { createOccupationAction } from '../../store/features/occupations/occupations-action-creators';

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Required field')
    .min(2, 'At least two characters required')
    .max(32, '32 characters at most')
    .matches(/^[aA-zZ\s]+$/, 'Please only use Latin alphabet and spacing'),

  field: Yup.object()
    .required('Required field'),

  specialisation: Yup.object()
    .required('Required field'),
});

const OccupationCreationPage = () => {
  const fields = useRootSelector(selectFields);
  const specialisations = useRootSelector(selectSpecialisations);
  const navigate = useNavigate();
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(fetchFieldsThunkAction);
    dispatch(fetchSpecialisationsThunkAction);
  }, []);

  const initialValues = {
    title: '',
    field: '',
    specialisation: '',
  };

  const handleCreateOccupation = (title, specialisation) => {
    const createOccupation = createOccupationAction(title, specialisation);
    dispatch(createOccupation);
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
    onSubmit: handleCreateOccupation,
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
          Occupation Creation
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
                  ? fields.map((field) => <MenuItem key={field.id} value={field}>{field.title}</MenuItem>) : null
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
            name='title'
            type="text"
            label="Occupation title"
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
            }}>Create New Occupation</Button>
          </Form>
          </Formik>
        </Container>
      </Paper>
    </Container>
  );
};

export default OccupationCreationPage;
