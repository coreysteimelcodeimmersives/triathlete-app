import React from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import SelectAutoWidth from '../Inputs/SelectAutoWidth';
import { DISTANCE_ABV } from '../../Data/DistanceUnits';

const EditDistance = ({ setDistance, distanceUnits, setDistanceUnits }) => {
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
          setDistance(e.target.value);
        }}
      ></TextField>
      <SelectAutoWidth
        setMinWidth={80}
        label={'Units'}
        valueVar={distanceUnits}
        setterFunc={setDistanceUnits}
        map={DISTANCE_ABV}
      ></SelectAutoWidth>
    </Box>
  );
};

export default EditDistance;
