import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Password = ({ setPassword }) => {
  const [passwordText, setPasswordText] = useState({ password: '' });

  const handleChange = (prop) => (event) => {
    setPasswordText({ ...passwordText, [prop]: event.target.value });
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setPasswordText({
      ...passwordText,
      showPassword: !passwordText.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', margin: '1%' }}>
      <div>
        <FormControl variant='outlined'>
          <InputLabel
            htmlFor='outlined-adornment-password'
            sx={{ color: 'purple' }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={passwordText.showPassword ? 'text' : 'password'}
            value={passwordText.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {passwordText.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>
      </div>
    </Box>
  );
};

export default Password;
