import React from 'react';
import { TextField } from '@mui/material';
import { useWorkoutContext } from '../../Context/WorkoutContext';

const EditDuration = ({ label, keyVar }) => {
  const { workout, handleUpdateWo } = useWorkoutContext();
  return (
    <TextField
      id='outlined-number'
      label={label}
      type='number'
      // value={valueVar ? valueVar : ''}
      InputLabelProps={{
        shrink: true,
        style: { color: 'purple' },
        padding: '5%',
      }}
      sx={{ margin: '2%' }}
      onChange={(e) => {
        const updateWoDuration = { ...workout, [keyVar]: e.target.value };
        handleUpdateWo(updateWoDuration);
      }}
    />
  );
};

export default EditDuration;
