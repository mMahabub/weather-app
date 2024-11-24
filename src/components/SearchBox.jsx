import React from 'react';
import { TextField, Button } from '@mui/material';

const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} style={{display: 'flex', alignItems: 'center', width: '100%', gap: '1rem'}}>
      <TextField
        label="City"
        variant="outlined"
        value={value}
        onChange={onChange}
        size='small'
        style={{flexGrow: 1}}
      />
      <Button type="submit" variant="contained">Search</Button>
    </form>
  );
};

export default SearchBox;