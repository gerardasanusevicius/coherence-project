// @ts-nocheck
import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ setSearchQuery }) => (
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Search by name"
      variant="outlined"
      placeholder="Search by name..."
      size="small"
    />
);

export default SearchBar;
