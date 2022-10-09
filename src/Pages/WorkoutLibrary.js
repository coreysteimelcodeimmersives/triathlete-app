import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import { Box } from '@mui/system';
import { workoutLibraryPage } from '../Redux-State/PageSlice';

const WorkoutLibrary = () => {
  const dispatch = useDispatch();
  const workoutLibrary = useSelector((state) => state.workoutLibrary);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(workoutLibraryPage());
  }, []);

  return (
    <Layout>
      {Object.keys(workoutLibrary).map((workoutId) => {
        return (
          <WorkoutCard key={workoutId} workoutId={workoutId}></WorkoutCard>
        );
      })}
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default WorkoutLibrary;
