import React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import WorkoutIcon from './WorkoutIcon';
import TextField from '@mui/material/TextField';
import { ENERGY_SYSTEMS } from '../../Data/EnergySystems';
import { DISTANCE_ABV } from '../../Data/DistanceUnits';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const WorkoutCard = ({ workoutId }) => {
  const navigate = useNavigate();
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const workout = workoutLibrary[workoutId];
  return (
    <Card
      sx={{
        display: 'flex',
        mx: '3%',
        marginBottom: '3%',
      }}
      onClick={() => {
        navigate('/workout-details');
      }}
    >
      <CardActionArea>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          padding={'3%'}
        >
          <WorkoutIcon sportType={workout.sportType}></WorkoutIcon>
          <Typography variant='h5' component='div' alignSelf={'center'}>
            {workout.title ? workout.title : 'Workout Title'}
          </Typography>
        </Box>
        <CardContent sx={{ marginTop: '-5%' }}>
          <TextField
            id='outlined-read-only-input'
            label='Energy System'
            value={
              workout.energySystem ? ENERGY_SYSTEMS[workout.energySystem] : ''
            }
            sx={{ marginLeft: '5%', marginBottom: '5%' }}
            InputLabelProps={{ style: { color: 'purple' } }}
            InputProps={{
              readOnly: true,
            }}
          ></TextField>
          <Box display={'flex'} flexDirection={'row'}>
            <TextField
              id='outlined-read-only-input'
              label='Hours'
              value={workout.durationHours ? workout.durationHours : ''}
              sx={{ marginLeft: '5%' }}
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
            <TextField
              id='outlined-read-only-input'
              label='Mintues'
              value={workout.durationMinutes ? workout.durationMinutes : ''}
              sx={{ marginLeft: '5%' }}
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
          </Box>
          <Box display={'flex'} flexDirection={'row'} marginTop={'5%'}>
            <TextField
              id='outlined-read-only-input'
              label='Distance'
              value={workout.distance ? workout.distance : ''}
              sx={{ marginLeft: '5%', width: '90%' }}
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
            <TextField
              id='outlined-read-only-input'
              label='Units'
              value={
                workout.distanceUnits ? DISTANCE_ABV[workout.distanceUnits] : ''
              }
              sx={{ marginLeft: '5%' }}
              InputLabelProps={{ style: { color: 'purple' } }}
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WorkoutCard;
