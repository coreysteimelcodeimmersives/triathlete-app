import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '../Components/Layout/Layout';
import {
  athleteWoDetailsEditPage,
  dayViewPage,
  workoutDetailsPage,
  workoutEditPage,
} from '../Redux-State/PageSlice';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import ViewWorkoutQuill from '../Components/WorkoutDetails/ViewWorkoutQuill';
import { deleteWoFromWoLib } from '../Redux-State/WorkoutLibrarySlice';
import { updateFilterSportType } from '../Redux-State/WorkoutLibFilterSlice';
import Axios from '../Utils/Axios';
import { selectAthlete } from '../Redux-State/AthleteLibrarySlice';

const WorkoutDetails = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const workout = useSelector((state) => state.workout);
  const state = useSelector((state) => state);
  const [error, setError] = useState('');

  const addWorkout = async () => {
    try {
      let athleteId = '';
      if (state.athleteLibrary) {
        athleteId = state.athleteLibrary.athlete.id;
      } else {
        athleteId = user.id;
      }
      const id = Math.ceil(Math.random() * 10000000);
      const date = page.date;
      const updateWo = { ...workout, id: id, date: date };
      const res = await Axios.post('/athlete-add-workout', {
        workoutData: updateWo,
        athleteId: athleteId,
      });
      dispatch(selectAthlete(res.data.athlete));
      dispatch(
        dayViewPage({ athleteFirstName: page.titleText, date: page.date })
      );
      setError('');
      navigate('/day-view');
    } catch (e) {
      setError(e.response ? e.response.data : e.message);
    }
  };

  const handleDelete = async () => {
    try {
      if (!page.athleteWoDetails) {
        const res = await Axios.post('/delete-workout', {
          workoutId: workout.id,
        });
        dispatch(deleteWoFromWoLib(workout.id));
        setError('');
        navigate('/workout-library-filter');
      } else {
        const res = await Axios.post('/athlete-delete-workout', {
          workoutId: workout.id,
          athleteId: state.athleteLibrary.athlete.id,
        });
        dispatch(selectAthlete(res.data.athlete));
        dispatch(
          dayViewPage({ athleteFirstName: res.data.firstName, date: page.date })
        );
        setError('');
        navigate('/day-view');
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    if (!page.date) {
      dispatch(workoutDetailsPage());
    }
    window.scrollTo(0, 0);

    dispatch(updateFilterSportType({ sportType: workout.sportType }));
  }, []);
  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Paper
          elevation={3}
          sx={{
            width: '95%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'true',
            paddingTop: '3%',
            marginBottom: '10vh',
          }}
        >
          {page.date && !page.athleteWoDetails && (
            <>
              <Button
                variant='contained'
                color='success'
                sx={{ margin: '5%', marginTop: '-1%' }}
                onClick={addWorkout}
              >
                Add Workout
              </Button>
            </>
          )}
          <WorkoutCard workoutId={workout.id}></WorkoutCard>
          <ViewWorkoutQuill label={'Warm Up'} richText={workout.warmUp} />
          <ViewWorkoutQuill label={'Main Set'} richText={workout.mainSet} />
          <ViewWorkoutQuill label={'Cool Down'} richText={workout.coolDown} />
          <ViewWorkoutQuill
            label={'Special Notes From Coach'}
            richText={workout.specialNotes}
          />
          <ViewWorkoutQuill
            label={'Athlete Notes'}
            richText={workout.athleteNotes}
          />
          {!page.date ||
            (page.athleteWoDetails && (
              <>
                <Button
                  variant='contained'
                  sx={{ margin: '5%', marginTop: '-2%' }}
                  onClick={() => {
                    if (!page.athleteWoDetails) {
                      dispatch(workoutEditPage());
                    } else {
                      dispatch(
                        athleteWoDetailsEditPage({
                          athleteFirstName: page.titleText,
                          date: page.date,
                        })
                      );
                    }
                    navigate('/edit-workout');
                  }}
                >
                  Edit Workout
                </Button>
                <Button
                  variant='contained'
                  sx={{ margin: '5%', marginTop: '-2%', bgcolor: 'red' }}
                  onClick={handleDelete}
                >
                  Delete Workout
                </Button>
              </>
            ))}
          <Box sx={{ mb: '3%', display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ color: 'red' }}>{error}</Typography>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default WorkoutDetails;
