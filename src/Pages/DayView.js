import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';
import { parseISO } from 'date-fns';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import { addWoWoLib, athleteWoDetails } from '../Redux-State/PageSlice';
import { DISTANCE_ABV } from '../Data/DistanceUnits';
import WorkoutIcon from '../Components/WorkoutCard/WorkoutIcon';
import { selectWorkout } from '../Redux-State/WorkoutSlice';

const DayView = () => {
  const page = useSelector((state) => state.page);
  const athleteWorkouts = useSelector(
    (state) => state.athleteLibrary.athlete.workouts
  );
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  const handleAddWorkoutClick = () => {
    dispatch(addWoWoLib({ athleteFirstName: page.titleText, date: page.date }));
    navigate('/workout-library');
  };

  useEffect(() => {
    const fnsDate = format(parseISO(page.date), 'PP');
    setDate(fnsDate);
    const fnsDay = format(parseISO(page.date), 'EEEE');
    setDay(fnsDay);
    setWorkouts(
      athleteWorkouts.filter((workout) => {
        return workout.date === page.date;
      })
    );
  }, []);
  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.05rem',
            color: 'purple',
            textDecoration: 'none',
            px: '10%',
          }}
        >
          {day} {date}
        </Typography>
        {workouts.map((workout, idx) => {
          return (
            <Card
              key={idx}
              sx={{
                display: 'flex',
                mx: '3%',
                marginBottom: '3%',
              }}
              onClick={() => {
                if (page.date) {
                  dispatch(
                    athleteWoDetails({
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
                    {workout.title}
                  </Typography>
                </Box>
                <CardContent sx={{ marginTop: '-5%' }}>
                  <TextField
                    id='outlined-read-only-input'
                    label='Energy System'
                    value={workout.energySystem}
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
                      value={workout.durationHours}
                      sx={{ marginLeft: '5%' }}
                      InputLabelProps={{ style: { color: 'purple' } }}
                      InputProps={{
                        readOnly: true,
                      }}
                    ></TextField>
                    <TextField
                      id='outlined-read-only-input'
                      label='Mintues'
                      value={workout.durationMinutes}
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
                        workout.distanceUnits
                          ? DISTANCE_ABV[workout.distanceUnits]
                          : ''
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
        })}
        <Card
          key={'add'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            border: 1,
            m: '3%',
            p: '3%',
            width: '90%',
          }}
          onClick={handleAddWorkoutClick}
        >
          <CardActionArea>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <AddCircleOutlineIcon
                color='secondary'
                sx={{ fontSize: 50, marginRight: '3%' }}
              ></AddCircleOutlineIcon>
              <Typography
                variant='h4'
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                Add Workout
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
        <Box marginBottom={'10vh'}></Box>
      </Box>
    </Layout>
  );
};

export default DayView;
