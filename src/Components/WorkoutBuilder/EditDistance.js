import React from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import SelectAutoWidth from '../Inputs/SelectAutoWidth';
import { DISTANCE_ABV } from '../../Data/DistanceUnits';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDistanceValue,
  updateDistanceUnits,
} from '../../Redux-State/WorkoutSlice';

const EditDistance = () => {
  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      sx={{
        width: '75vw',
      }}
    >
      <TextField
        sx={{ m: 1, marginLeft: '3%' }}
        id='outlined'
        label='Distance'
        type='number'
        InputLabelProps={{ style: { color: 'purple' } }}
        value={workout.distanceValue ? workout.distanceValue : ''}
        onChange={(e) => {
          dispatch(updateDistanceValue({ distanceValue: e.target.value }));
        }}
      ></TextField>
      <SelectAutoWidth
        setMinWidth={80}
        label={'Units'}
        keyVar={'distanceUnits'}
        map={DISTANCE_ABV}
        dispatchFunc={updateDistanceUnits}
        required={false}
        error={false}
      ></SelectAutoWidth>
    </Box>
  );
};

export default EditDistance;
