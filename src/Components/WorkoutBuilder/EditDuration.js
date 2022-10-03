import React from 'react';
import { TextField } from '@mui/material';

const EditDuration = ({ label, valueVar, setterFunc }) => {
  return (
    <TextField
      id='outlined-number'
      label={label}
      type='number'
      value={valueVar ? valueVar : ''}
      InputLabelProps={{
        shrink: true,
        style: { color: 'purple' },
        padding: '5%',
      }}
      sx={{ margin: '2%' }}
      onChange={(e) => {
        setterFunc(e.target.value);
      }}
    />
  );
};

export default EditDuration;
