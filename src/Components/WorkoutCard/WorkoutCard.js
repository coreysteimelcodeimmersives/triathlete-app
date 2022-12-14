import React, { useEffect, useState } from 'react';
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
import { selectWorkout } from '../../Redux-State/WorkoutSlice';
import { addWoWoSelectWo } from '../../Redux-State/PageSlice';

const WorkoutCard = ({ workoutId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const workoutLibrary = useSelector((state) => state.workoutLibrary.woLib);
  const page = useSelector((state) => state.page);
  const state = useSelector((state) => state);
  const [workout, setWorkout] = useState({});
  useEffect(() => {
    if (!page.athleteWoDetails) {
      setWorkout(workoutLibrary.find((workout) => workout.id === workoutId));
    } else {
      setWorkout(state.workout);
    }
  }, []);
  return (
    <Card
      sx={{
        display: 'flex',
        mx: '3%',
        marginBottom: '3%',
      }}
      onClick={() => {
        if (page.date && !page.athleteWoDetails) {
          dispatch(
            addWoWoSelectWo({
              athleteFirstName: page.titleText,
              date: page.date,
            })
          );
        }
        dispatch(selectWorkout(workout));
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
              value={workout.distanceValue ? workout.distanceValue : ''}
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
