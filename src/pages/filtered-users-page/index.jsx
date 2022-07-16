// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import {
  selectFields, selectOccupations, selectSpecialisations, selectUsers,
} from '../../store/selectors';
import { fetchUsersThunkAction } from '../../store/features/users/users-action-creators';
import { fetchFieldsThunkAction } from '../../store/features/fields/fields-action-creators';
import { fetchSpecialisationsThunkAction } from '../../store/features/specialisations/specialisations-action-creators';
import { fetchOccupationsThunkAction } from '../../store/features/occupations/occupations-action-creators';
import { useRootDispatch, useRootSelector } from '../../store/hooks';

const FilteredUsersPage = () => {
  const users = useRootSelector(selectUsers);
  const fields = useRootSelector(selectFields);
  const specialisations = useRootSelector(selectSpecialisations);
  const occupations = useRootSelector(selectOccupations);
  const dispatch = useRootDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUsersThunkAction);
    dispatch(fetchFieldsThunkAction);
    dispatch(fetchSpecialisationsThunkAction);
    dispatch(fetchOccupationsThunkAction);
  }, []);

  const titleCase = (s) => s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ` ${c.toUpperCase()}`);

  const titleCasedId = titleCase(id);

  const testFields = fields.some((field) => field.title === titleCasedId);
  const testSpecialisations = specialisations.some((specialisation) => specialisation.title === titleCasedId);
  const testOccupations = occupations.some((occupation) => occupation.title === titleCasedId);

  let filteredUsers = [];

  if (testFields) {
    filteredUsers = users.filter((user) => user.field === titleCasedId);
  } else if (testSpecialisations) {
    filteredUsers = users.filter((user) => user.specialisation === titleCasedId);
  } else if (testOccupations) {
    filteredUsers = users.filter((user) => user.occupation === titleCasedId);
  }

  return (
    <>
    <Typography variant="h4" sx={{ textAlign: 'center' }}>Filtered by {titleCasedId}</Typography>
    <Container sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mt: '2rem',
    }}>
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Field</TableCell>
            <TableCell align="right">Specialisation</TableCell>
            <TableCell align="right">Occupation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow
              key={user.id}
            >
              <TableCell component="th" scope="row">
                {user
                  .id}
              </TableCell>
              <TableCell align="right">{user
                .firstName}</TableCell>
              <TableCell align="right">{user
                .lastName}</TableCell>
              <TableCell align="right">{user
                .email}</TableCell>
              <TableCell align="right">{user
                .age}</TableCell>
              <TableCell align="right">{user
                .gender}</TableCell>
              <TableCell align="right">{user
                .field}</TableCell>
              <TableCell align="right">{user
                .specialisation}</TableCell>
              <TableCell align="right">{user
                .occupation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
  );
};

export default FilteredUsersPage;
