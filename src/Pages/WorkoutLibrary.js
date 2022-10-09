import React from 'react';
import Layout from '../Components/Layout/Layout';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/system';

const WorkoutLibrary = () => {
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
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
