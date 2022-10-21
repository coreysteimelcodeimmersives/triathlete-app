import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import SelectAutoWidth from '../Inputs/SelectAutoWidth';
import { DISTANCE_ABV } from '../../Data/DistanceUnits';

const EditDistance = ({ workoutBuilderForm, setWorkoutBuilderForm }) => {
  const [value, setValue] = useState(Number(workoutBuilderForm.distanceValue));
  const handleChange = (e) => {
    setWorkoutBuilderForm({
      ...workoutBuilderForm,
      distanceValue: e.target.value,
    });
  };
  useEffect(() => {
    if (Number(workoutBuilderForm.distanceValue) === 0) {
      setValue('');
      return;
    }
    setValue(workoutBuilderForm.distanceValue);
  }, [workoutBuilderForm.distanceValue]);

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
        value={value}
        onChange={handleChange}
        autoComplete='false'
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
