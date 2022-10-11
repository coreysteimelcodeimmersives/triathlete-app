import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import { Box } from '@mui/system';
import { woLibFilterPage } from '../Redux-State/PageSlice';

const WorkoutLibraryFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const workoutLibFilter = useSelector((state) => state.workoutLibFilter);
  const [filteredWoLibArr, setFilteredWoLibArr] = useState(workoutLibrary);

  const applyFilterToWoLib = () => {
    if (!workoutLibFilter.sportType) {
      setFilteredWoLibArr(
        workoutLibrary.filter((workout) => {
          return !workout.hasOwnProperty('sportType');
        })
      );
    } else {
      setFilteredWoLibArr(
        workoutLibrary.filter((workout) => {
          return workout.sportType === workoutLibFilter.sportType;
        })
      );
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    dispatch(woLibFilterPage(workoutLibFilter.sportType));
    applyFilterToWoLib();
  }, [workoutLibFilter]);
  return (
    <Layout>
      {workoutLibrary &&
        filteredWoLibArr.map((workout) => {
          return (
            <WorkoutCard key={workout.id} workoutId={workout.id}></WorkoutCard>
          );
        })}
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default WorkoutLibraryFilter;
