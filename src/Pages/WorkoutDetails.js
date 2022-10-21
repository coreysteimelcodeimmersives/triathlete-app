import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Layout from '../Components/Layout/Layout';
import { workoutDetailsPage, workoutEditPage } from '../Redux-State/PageSlice';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import ViewWorkoutQuill from '../Components/WorkoutDetails/ViewWorkoutQuill';
import { deleteWoFromWoLib } from '../Redux-State/WorkoutLibrarySlice';
import { copyWoLib } from '../Redux-State/FilteredSortedWoLibSlice';
import { updateFilterSportType } from '../Redux-State/WorkoutLibFilterSlice';

const WorkoutDetails = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const workout = useSelector((state) => state.workout);
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    dispatch(workoutDetailsPage());
    dispatch(copyWoLib(workoutLibrary));
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
            onClick={() => {
              dispatch(deleteWoFromWoLib(workout.id));
              navigate('/workout-library-filter');
            }}
          >
            Delete Workout
          </Button>
        </Paper>
      </Box>
    </Layout>
  );
};

export default WorkoutDetails;
