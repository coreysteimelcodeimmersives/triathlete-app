import React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

const UserName = ({ setEmail }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '1%',
      }}
    >
      <TextField
        id='input-with-icon-textfield'
        label='Email'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        InputLabelProps={{ style: { color: 'purple' } }}
        onChange={(e) => {
          const email = e.target.value;
          setEmail(email);
        }}
      />
    </Box>
  );
};

export default UserName;
