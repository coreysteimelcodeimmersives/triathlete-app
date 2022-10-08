import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { updateTitle } from '../../Redux-State/WorkoutSlice';

const EditTitle = () => {
  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();
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
        defaultValue={workout.title ? workout.title : ''}
        onChange={(e) => {
          dispatch(updateTitle({ title: e.target.value }));
        }}
      ></TextField>
    </Box>
  );
};

export default EditTitle;
