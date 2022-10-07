import React from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import SelectAutoWidth from '../Inputs/SelectAutoWidth';
import { DISTANCE_ABV } from '../../Data/DistanceUnits';
import WorkoutContextProvider, {
  useWorkoutContext,
} from '../../Context/WorkoutContext';

const EditDistance = () => {
  const { workout, handleUpdateWo } = useWorkoutContext();
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      component='form'
      sx={{
        width: '75vw',
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        sx={{ m: 1, marginLeft: '3%' }}
        id='outlined'
        label='Distance'
        type='text'
        InputLabelProps={{ style: { color: 'purple' } }}
        onChange={(e) => {
          const updateWoDistance = { ...workout, distance: e.target.value };
          handleUpdateWo(updateWoDistance);
        }}
      ></TextField>
      <SelectAutoWidth
        setMinWidth={80}
        label={'Units'}
        keyVar={'distanceUnits'}
        map={DISTANCE_ABV}
      ></SelectAutoWidth>
    </Box>
  );
};

export default EditDistance;
