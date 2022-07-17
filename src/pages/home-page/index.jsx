// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
  Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectUsers } from '../../store/selectors';
import { fetchUsersThunkAction } from '../../store/features/users/users-action-creators';
import SearchBar from '../../components/search-bar.jsx';

const HomePage = () => {
  const users = useRootSelector(selectUsers);
  const dispatch = useRootDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const filterUsers = (query) => {
    if (!query) {
      return users;
    }
    return users.filter((d) => d.firstName.toLowerCase().includes(query) || d.lastName.toLowerCase().includes(query));
  };

  const usersFiltered = filterUsers(searchQuery);

  useEffect(() => {
    dispatch(fetchUsersThunkAction);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
    <Typography variant="h4" sx={{ textAlign: 'center' }}>List of all Users</Typography>

    <Container sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      mt: '2rem',
    }}>
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <TableContainer component={Paper} sx={{ mt: '1rem' }}>
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
            { (users && usersFiltered)
              ? (rowsPerPage > 0
                ? usersFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : users.Filtered).map((user) => (
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
              )) : null
        }
        </TableBody>
      </Table>
      <TablePagination
      component="div"
      count={users.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </TableContainer>
    </Container>
    </>
  );
};

export default HomePage;
