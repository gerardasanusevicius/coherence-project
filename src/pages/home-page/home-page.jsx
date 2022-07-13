// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { getUsers } from '../../services/user-service';

const HomePage = () => {
  const [users, setUsers] = useState([]);
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

  return (
    <>
    <Typography variant="h4" sx={{ textAlign: 'center' }}>List of all Users</Typography>
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
          {users.map((user) => (
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

export default HomePage;
