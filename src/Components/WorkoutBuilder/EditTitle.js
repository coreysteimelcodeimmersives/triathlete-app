import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

const EditTitle = ({ error, workoutBuilderForm, setWorkoutBuilderForm }) => {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '97%' },
        display: 'flex',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined'
        label='Workout Title'
        type='text'
        InputLabelProps={{ style: { color: 'purple' } }}
        value={workoutBuilderForm.title ? workoutBuilderForm.title : ''}
        onChange={(e) => {
          setWorkoutBuilderForm({
            ...workoutBuilderForm,
            title: e.target.value,
          });
        }}
        required
        error={error}
      ></TextField>
    </Box>
  );
};

export default EditTitle;
