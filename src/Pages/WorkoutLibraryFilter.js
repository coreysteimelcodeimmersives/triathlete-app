import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import { Box } from '@mui/system';
import { woLibFilterPage } from '../Redux-State/PageSlice';
import { filterAndSortWoLib } from '../Redux-State/WorkoutLibrarySlice';

const WorkoutLibraryFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const workoutLibrary = useSelector((state) => state.workoutLibrary.woLib);
  const copyWorkoutLibrary = useSelector(
    (state) => state.workoutLibrary.copyWoLib
  );
  const workoutLibFilter = useSelector((state) => state.workoutLibFilter);

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    dispatch(woLibFilterPage(workoutLibFilter.sportType));
    dispatch(
      filterAndSortWoLib({
        copyWoLib: copyWorkoutLibrary,
        engSysFilter: workoutLibFilter.energySystem,
        criteria: workoutLibFilter.criteria,
        order: workoutLibFilter.order,
      })
    );
  }, []);

  return (
    <Layout>
      {workoutLibrary.map((workout) => {
        return (
          <WorkoutCard key={workout.id} workoutId={workout.id}></WorkoutCard>
        );
      })}
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default WorkoutLibraryFilter;
