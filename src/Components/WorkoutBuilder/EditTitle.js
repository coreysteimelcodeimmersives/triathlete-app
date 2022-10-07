import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useWorkoutContext } from '../../Context/WorkoutContext';

const EditTitle = () => {
  const { handleUpdateWoTitle } = useWorkoutContext();
  return (
    <Box
      component='form'
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
        onChange={(e) => {
          handleUpdateWoTitle(e.target.value);
        }}
      ></TextField>
    </Box>
  );
};

export default EditTitle;
