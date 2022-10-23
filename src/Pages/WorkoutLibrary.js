import React, { useEffect, useState } from 'react';
import Axios from '../Utils/Axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import { Box } from '@mui/system';
import { workoutLibraryPage } from '../Redux-State/PageSlice';
import { SPORT_TYPES } from '../Data/SportTypes';
import SportTypeCard from '../Components/Layout/SportTypeCard';
import { clearWorkoutLibFilter } from '../Redux-State/WorkoutLibFilterSlice';
import { hardUpdate } from '../Redux-State/WorkoutLibrarySlice';
import { Typography } from '@mui/material';

const WorkoutLibrary = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  useEffect(() => {
    setError('');
    const updateWoLib = async () => {
      try {
        const libRes = await Axios.get('/get-workouts');
        dispatch(hardUpdate(libRes.data.workouts));
        setError('');
      } catch (e) {
        setError(e.response ? e.response.data : e.message);
      }
    };
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    updateWoLib();

    dispatch(clearWorkoutLibFilter());
  }, []);

  return (
    <Layout>
      {Object.keys(SPORT_TYPES).map((sportType) => {
        return (
          <SportTypeCard key={sportType} sportType={sportType}></SportTypeCard>
        );
      })}
      <Box sx={{ mb: '3%', display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ color: 'red' }}>{error}</Typography>
      </Box>
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default WorkoutLibrary;
