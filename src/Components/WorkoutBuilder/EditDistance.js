import React from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import SelectAutoWidth from '../Inputs/SelectAutoWidth';
import { DISTANCE_ABV } from '../../Data/DistanceUnits';

const EditDistance = ({ workoutBuilderForm, setWorkoutBuilderForm }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      sx={{
        width: '75vw',
      }}
      justifyContent={'space-evenly'}
      alignItems={'center'}
    >
      <TextField
        sx={{ m: 1, marginLeft: '3%' }}
        id='outlined'
        label='Distance'
        type='number'
        InputLabelProps={{ style: { color: 'purple' } }}
        value={
          workoutBuilderForm.distanceValue
            ? workoutBuilderForm.distanceValue
            : ''
        }
        onChange={(e) => {
          setWorkoutBuilderForm({
            ...workoutBuilderForm,
            distanceValue: e.target.value,
          });
        }}
      ></TextField>
      <SelectAutoWidth
        setMinWidth={80}
        label={'Units'}
        keyVar={'distanceUnits'}
        map={DISTANCE_ABV}
        required={false}
        error={false}
        workoutBuilderForm={workoutBuilderForm}
        setWorkoutBuilderForm={setWorkoutBuilderForm}
      ></SelectAutoWidth>
    </Box>
  );
};

export default EditDistance;
