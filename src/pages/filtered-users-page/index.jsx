// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { getUsers } from '../../services/user-service';
import { getFields, getOccupations, getSpecialisations } from '../../services/category-service';

const FilteredUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [fields, setFields] = useState([]);
  const [specialisations, setSpecialisations] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUsers().then(
      (res) => {
        setUsers(res.data);
      },
      (error) => {
        throw error;
      },
    );
  }, []);

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
