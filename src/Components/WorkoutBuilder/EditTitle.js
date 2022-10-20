import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { updateTitle } from '../../Redux-State/WorkoutSlice';

const EditTitle = ({ error }) => {
  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '95%' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined'
        label='Workout Title'
        type='text'
        InputLabelProps={{ style: { color: 'purple' } }}
        value={workout.title ? workout.title : ''}
        onChange={(e) => {
          dispatch(updateTitle({ title: e.target.value }));
        }}
        required
        error={error}
      ></TextField>
    </Box>
  );
};

export default EditTitle;
