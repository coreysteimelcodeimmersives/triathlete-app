import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '../Components/Layout/Layout';
import { workoutDetailsPage, workoutEditPage } from '../Redux-State/PageSlice';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import ViewWorkoutQuill from '../Components/WorkoutDetails/ViewWorkoutQuill';
import { deleteWoFromWoLib } from '../Redux-State/WorkoutLibrarySlice';
import { updateFilterSportType } from '../Redux-State/WorkoutLibFilterSlice';
import Axios from '../Utils/Axios';

const WorkoutDetails = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const workout = useSelector((state) => state.workout);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    try {
      const res = await Axios.post('/delete-workout', {
        workoutId: workout.id,
      });
      dispatch(deleteWoFromWoLib(workout.id));
      setError('');
      navigate('/workout-library-filter');
    } catch (e) {
      setError(e.response ? e.response.data : e.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    dispatch(workoutDetailsPage());
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
          <Button
            variant='contained'
            sx={{ margin: '5%', marginTop: '-2%' }}
            onClick={() => {
              dispatch(workoutEditPage());
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
          <Box sx={{ mb: '3%', display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ color: 'red' }}>{error}</Typography>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default WorkoutDetails;
