import React from 'react';

import {Box, InputLabel, MenuItem, FormControl, Select} from '@mui/material';

function BasicSelect() {
  const [membership, setMembership] = React.useState('');

  const handleChange = (event) => {
    setMembership(event.target.value);
  };

  return (
    <Box className='basic-input-container'>
      <FormControl 
        fullWidth 
        className='basic-input-form'>
        <InputLabel className='input-label' sx={{color:'#ffffff'}} id="simple-select-label">Acme Inc</InputLabel>
        <Select
          sx={{color:'#6B7280'}}
          className='select-label basic-input-form text'
          labelId="simple-select-label"
          id="simple-select"
          value={membership}
          label="Acme Inc"
          onChange={handleChange}
        >
          <MenuItem className='text' value={1}>Basic</MenuItem>
          <MenuItem value={2}>Medium</MenuItem>
          <MenuItem value={3}>Premium</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;