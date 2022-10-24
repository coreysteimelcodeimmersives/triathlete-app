import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { signOut } from '../Redux-State/UserSlice';
import { Box } from '@mui/system';
import Axios from '../Utils/Axios';
import { clearWorkout } from '../Redux-State/WorkoutSlice';
import { clearWorkoutLibrary } from '../Redux-State/WorkoutLibrarySlice';
import { signInPage } from '../Redux-State/PageSlice';
import { clearWorkoutLibFilter } from '../Redux-State/WorkoutLibFilterSlice';
import { clearAthleteLib } from '../Redux-State/AthleteLibrarySlice';

const Settings = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSignOut = async () => {
    try {
      await Axios.get('/sign-out');
      dispatch(clearWorkout());
      dispatch(clearWorkoutLibrary());
      dispatch(signInPage());
      dispatch(clearWorkoutLibFilter());
      dispatch(clearAthleteLib());
      dispatch(signOut());
      setError('');
      navigate('/sign-in');
    } catch (e) {
      console.log(e);
      setError(e.response ? e.response.data : e.message);
    }
  };

  return (
    <Layout>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'70vh'}
      >
        <Button variant='outlined' onClick={handleSignOut}>
          Log Out
        </Button>
        <Box sx={{ margin: '3%' }}>
          <Typography sx={{ color: 'red' }}>{error}</Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Settings;
