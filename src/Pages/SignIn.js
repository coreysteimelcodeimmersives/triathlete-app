import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../Redux-State/UserSlice';
import UserName from '../Components/TextField/UserName';
import Password from '../Components/TextField/Password';
import {
  signInPage,
  athleteLibraryPage,
  weekCalendarPage,
} from '../Redux-State/PageSlice';
import Axios from '../Utils/Axios';
import { getAthletes, selectAthlete } from '../Redux-State/AthleteLibrarySlice';

const SignIn = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [userRegForm, setUserRegForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (!user) {
      dispatch(signInPage());
    } else if (!user.isAdmin) {
      dispatch(weekCalendarPage());
      navigate('/calendar-week');
    } else if (user.isAdmin) {
      dispatch(athleteLibraryPage());
      navigate('/athlete-library');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('/sign-in', {
        credentials: userRegForm,
      });
      const fetchedUser = response.data.user;
      dispatch(signIn(fetchedUser));

      setError('');
      if (fetchedUser.isAdmin) {
        navigate('/athlete-library');
      } else {
        dispatch(getAthletes([fetchedUser]));
        dispatch(selectAthlete(fetchedUser));
        navigate('/calendar-week');
      }
    } catch (e) {
      console.log(e);
      setError(e.response ? e.response.data : e.message);
    }
  };

  return (
    <Layout>
      <form action='submit' onSubmit={handleSubmit}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          height={'70vh'}
        >
          <UserName userRegForm={userRegForm} setUserRegForm={setUserRegForm} />
          <Password userRegForm={userRegForm} setUserRegForm={setUserRegForm} />
          <Button variant='outlined' type='form' sx={{ margin: '1%' }}>
            Sign In
          </Button>
          <Box sx={{ margin: '3%' }}>
            <Typography
              sx={{
                color: 'purple',
              }}
              onClick={() => {
                navigate('/register-user');
              }}
            >
              Create Account
            </Typography>
          </Box>
          <Box sx={{ margin: '3%' }}>
            <Typography sx={{ color: 'red' }}>{error}</Typography>
          </Box>
        </Box>
      </form>
    </Layout>
  );
};

export default SignIn;
