import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from '../Utils/Axios';
import { signIn } from '../Redux-State/UserSlice';
import Layout from '../Components/Layout/Layout';
import UserName from '../Components/TextField/UserName';
import Password from '../Components/TextField/Password';
import { Button, TextField, Box, Typography } from '@mui/material';
import { getAthletes, selectAthlete } from '../Redux-State/AthleteLibrarySlice';

const RegisterUser = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userRegForm, setUserRegForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('/register-user', {
        ...userRegForm,
      });
      const { user } = response.data;
      dispatch(signIn(user));
      dispatch(getAthletes([user]));
      dispatch(selectAthlete(user));
      navigate('/calendar-week');
    } catch (e) {
      console.log(e);
      setError(e.message);
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
          sx={{ margin: '3%' }}
        >
          <Box sx={{ margin: '3%' }}>
            <UserName
              userRegForm={userRegForm}
              setUserRegForm={setUserRegForm}
            />
          </Box>
          <Box sx={{ margin: '3%' }}>
            <Password
              userRegForm={userRegForm}
              setUserRegForm={setUserRegForm}
            />
          </Box>
          <TextField
            InputLabelProps={{ style: { color: 'purple' } }}
            sx={{ margin: '3%', width: '60vw' }}
            id='outlined-basic-firstName'
            label='First Name'
            variant='outlined'
            onChange={(e) => {
              setUserRegForm({ ...userRegForm, firstName: e.target.value });
            }}
            required
          />
          <TextField
            InputLabelProps={{ style: { color: 'purple' } }}
            sx={{ margin: '3%', width: '60vw' }}
            id='outlined-basic-lastName'
            label='Last Name'
            variant='outlined'
            onChange={(e) => {
              setUserRegForm({ ...userRegForm, lastName: e.target.value });
            }}
            required
          />
          <Button variant='outlined' type='form' sx={{ margin: '3%' }}>
            Create Account
          </Button>
          <Box sx={{ margin: '3%' }}>
            <Typography
              sx={{
                color: 'purple',
              }}
              onClick={() => {
                navigate('/sign-in');
              }}
            >
              Sign In
            </Typography>
          </Box>
          <Box sx={{ margin: '5%' }}>
            <Typography sx={{ color: 'red' }}>{error}</Typography>
          </Box>
        </Box>
      </form>
    </Layout>
  );
};

export default RegisterUser;
